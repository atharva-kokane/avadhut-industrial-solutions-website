import RequestQuoteForm from "@/components/RequestQuoteForm";
import { Metadata } from "next";

export const metadata = {
  title: "Request Quote - Avadhut Industrial Solutions",
  description: "Get a competitive quote for your electronics manufacturing needs",
};

export default function RequestQuotePage() {
  return <RequestQuoteForm />;
}
