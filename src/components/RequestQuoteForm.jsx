"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Button from "./Button";

// Supabase init
const supabase =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ? createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      )
    : null;

export default function RequestQuoteForm() {

  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    business_email: "",
    phone: "",
    service_category_id: "",
    qty: "",
    timeline: "",
    pref_res: "",
    requirements: "",
  });

  const [serviceCategories, setServiceCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  // Fetch categories
  useEffect(() => {

    const fetchCategories = async () => {

      if (!supabase) return;

      const { data, error } = await supabase
        .from("service_categories")
        .select("id, service_name")
        .order("service_name");

      if (error) {
        console.error("Category fetch error:", error);
      } else {
        setServiceCategories(data || []);
      }

    };

    fetchCategories();

  }, []);

  // Input handler
  const handleInputChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // Validation
  const validateForm = () => {

    const err = {};

    if (!formData.name.trim()) err.name = "Required";
    if (!formData.company_name.trim()) err.company_name = "Required";
    if (!formData.business_email.trim()) err.business_email = "Required";
    if (!formData.phone.trim()) err.phone = "Required";
    if (!formData.service_category_id) err.service_category_id = "Required";
    if (!formData.qty.trim()) err.qty = "Required";
    if (!formData.timeline.trim()) err.timeline = "Required";
    if (!formData.requirements.trim()) err.requirements = "Required";

    setErrors(err);

    return Object.keys(err).length === 0;

  };

  // Submit handler
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!supabase) {
      setMessage("Supabase not configured");
      return;
    }

    if (!validateForm()) {
      setMessage("Please fill required fields");
      return;
    }

    setLoading(true);
    setMessage("");

    try {

      let userId;

      // Check existing user safely
      const { data: existingUser, error: existingError } =
        await supabase
          .from("users")
          .select("id")
          .eq("business_email", formData.business_email.trim())
          .maybeSingle();

      if (existingError) {
        console.error("User check error:", existingError);
        throw existingError;
      }

      if (existingUser) {

        userId = existingUser.id;

      } else {

        // Insert new user
        const { data: newUser, error: userError } =
          await supabase
            .from("users")
            .insert({
              name: formData.name.trim(),
              company_name: formData.company_name.trim(),
              business_email: formData.business_email.trim(),
              phone: parseInt(formData.phone.trim()),
            })
            .select("id")
            .single();

        if (userError) {
          console.error("User insert error:", userError);
          throw userError;
        }

        userId = newUser.id;

      }

      // Insert quote safely
      const { data: quoteData, error: quoteError } =
        await supabase
          .from("quotes")
          .insert({
            user_id: userId,
            service_category_id: formData.service_category_id,
            qty: parseInt(formData.qty.trim()),
            timeline: formData.timeline.trim(),
            pref_res: formData.pref_res.trim() || "",
            requirements: formData.requirements.trim(),
          })
          .select("id")
          .single();

      if (quoteError) {
        console.error("Quote insert error:", quoteError);
        throw quoteError;
      }

      console.log("Quote inserted:", quoteData);

      setMessage("Quote submitted successfully!");

      // Reset form
      setFormData({
        name: "",
        company_name: "",
        business_email: "",
        phone: "",
        service_category_id: "",
        qty: "",
        timeline: "",
        pref_res: "",
        requirements: "",
      });

    }
    catch (err) {

      console.error("Submit error:", err);

      setMessage("Error: " + err.message);

    }
    finally {

      setLoading(false);

    }

  };

  return (

    <form onSubmit={handleSubmit} className="space-y-4">

      <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" />

      <input name="company_name" value={formData.company_name} onChange={handleInputChange} placeholder="Company" />

      <input name="business_email" value={formData.business_email} onChange={handleInputChange} placeholder="Email" />

      <input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" />

      <select name="service_category_id" value={formData.service_category_id} onChange={handleInputChange}>
        <option value="">Select Category</option>
        {serviceCategories.map(cat => (
          <option key={cat.id} value={cat.id}>
            {cat.service_name}
          </option>
        ))}
      </select>

      <input name="qty" value={formData.qty} onChange={handleInputChange} placeholder="Quantity" />

      <input name="timeline" value={formData.timeline} onChange={handleInputChange} placeholder="Timeline" />

      <input name="pref_res" value={formData.pref_res} onChange={handleInputChange} placeholder="Preferred Response" />

      <textarea name="requirements" value={formData.requirements} onChange={handleInputChange} placeholder="Requirements" />

      <Button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit Quote"}
      </Button>

      {message && <p>{message}</p>}

    </form>

  );

}
