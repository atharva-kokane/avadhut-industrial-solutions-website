"use client";

import React, { useState } from "react";
import {
    ArrowLeft,
    LogOut,
    Package,
    Search,
    Filter,
    ChevronDown,
    Trash2,
    Cpu,
    Zap,
    Wrench,
    CircuitBoard
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function AdminDashboard() {
    const [quotes, setQuotes] = useState([]);
    const [fetchError, setFetchError] = useState("");
    const [isFetching, setIsFetching] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All Status");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const router = useRouter();

    // Load quotes from localStorage
    React.useEffect(() => {
        const fetchQuotes = async () => {
            setIsFetching(true);
            setFetchError("");
            const { data, error } = await supabase
                .from("quotes")
                .select(
                    `
            status,
            created_at,
            created_on,
            id,
            quote_id,
            qty,
            quantity,
            timeline,
            pref_res,
            requirements,
            description,
            service_categories (
              service_name
            ),
            users (
              name,
              phone,
              company_name,
              business_email
            )
          `,
                )
                .order("created_at", { ascending: false });

            if (error) {
                const debugError = {
                    message: error?.message,
                    details: error?.details,
                    hint: error?.hint,
                    code: error?.code,
                    name: error?.name,
                };

                console.error("Error fetching quotes:", debugError);
                setFetchError(error?.message || "Failed to fetch quotes");
                setIsFetching(false);
                return;
            }

            // reshape data to match your UI
            const formattedQuotes = data.map((q) => ({
                id: q.id ?? q.quote_id,
                dbId: q.id,
                quoteId: q.quote_id,
                name: q.users?.name,
                email: q.users?.business_email,
                phone: q.users?.phone,
                company: q.users?.company_name,
                serviceType: q.service_categories?.service_name,
                productType: q.product_type,
                quantity: q.qty ?? q.quantity,
                urgency: q.timeline,
                requirements: q.requirements ?? q.description,
                status: q.status,
                createdAt: q.created_on ?? q.created_at,
                date: new Date(q.created_on ?? q.created_at).toLocaleDateString(),
            }));

            // sort client-side by available date fields
            formattedQuotes.sort((a, b) => {
                const dateA = new Date(a.createdAt || 0);
                const dateB = new Date(b.createdAt || 0);
                return dateB - dateA;
            });

            console.log(formattedQuotes);

            setQuotes(formattedQuotes);
            setIsFetching(false);
        };

        fetchQuotes();
    }, []);

    // Update quote status
    const updateStatus = async (id, newStatus) => {
        const quote = quotes.find((q) => q.id === id);
        const targetId = quote?.dbId ?? id;
        const { error } = await supabase
            .from("quotes")
            .update({ status: newStatus })
            .eq("id", targetId);
        if (error) {
            alert("Failed to update status");
            return;
        }

        setQuotes((prev) =>
            prev.map((q) => (q.id === id ? { ...q, status: newStatus } : q)),
        );
    };

    // Delete quote
    const deleteQuote = async (id) => {
        if (!confirm("Are you sure you want to delete this quote?")) return;

        const quote = quotes.find((q) => q.id === id);
        const targetId = quote?.dbId ?? id;

        const { error } = await supabase
            .from("quotes")
            .delete()
            .eq("id", targetId);

        if (error) {
            alert("Failed deleting quote");
            return;
        }

        setQuotes((prev) => prev.filter((q) => q.id != id));
    };

    const handleLogout = async () => {
        try {
            // Tell Supabase to sign out the user
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            localStorage.clear();    // Removes all stored items
            sessionStorage.clear();   // Removes all session items

            // Redirect the user back to login or landing page
            router.push("/");

        } catch (err) {
            console.error("Error logging out:", err.message);
            alert("Failed to log out. Please try again.");
        }
    };

    const statuses = ["All Status", "New", "Contacted", "Finalized"];

    // Service type icons
    const getServiceIcon = (serviceType) => {
        switch (serviceType?.toLowerCase()) {
            case 'pcb assembly':
                return <Cpu className="w-5 h-5" />;
            case 'transformer winding':
                return <Zap className="w-5 h-5" />;
            case 'electronics repair':
                return <Wrench className="w-5 h-5" />;
            default:
                return <CircuitBoard className="w-5 h-5" />;
        }
    };

    // Calculate real-time stats
    const stats = [
        {
            label: "Total Quotes",
            value: quotes.length,
            icon: <Package className="w-10 h-10 text-gray-400" />,
        },
        {
            label: "New Requests",
            value: quotes.filter((q) => q.status === "New").length,
            color: "text-blue-600",
            badge: (
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-lg font-bold">
                        {quotes.filter((q) => q.status === "New").length}
                    </span>
                </div>
            ),
        },
        {
            label: "Contacted",
            value: quotes.filter((q) => q.status === "Contacted").length,
            color: "text-yellow-600",
            badge: (
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <span className="text-yellow-600 text-lg font-bold">
                        {quotes.filter((q) => q.status === "Contacted").length}
                    </span>
                </div>
            ),
        },
        {
            label: "Finalized",
            value: quotes.filter((q) => q.status === "Finalized").length,
            color: "text-green-600",
            badge: (
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-lg font-bold">
                        {quotes.filter((q) => q.status === "Finalized").length}
                    </span>
                </div>
            ),
        },
    ];

    // Filter quotes based on search and status
    const filteredQuotes = (quotes || []).filter((quote) => {
        const searchLower = searchTerm.toLowerCase().trim();

        if (!searchLower)
            return (
                statusFilter === "All Status" || quote.status === statusFilter
            );

        const matchesSearch =
            (quote.name?.toLowerCase() || "").includes(searchLower) ||
            (quote.email?.toLowerCase() || "").includes(searchLower) ||
            (quote.company?.toLowerCase() || "").includes(searchLower) ||
            (quote.serviceType?.toLowerCase() || "").includes(searchLower) ||
            (quote.productType?.toLowerCase() || "").includes(searchLower) ||
            (quote.requirements?.toLowerCase() || "").includes(searchLower);

        const matchesStatus =
            statusFilter === "All Status" || quote.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    return (
        <div className="min-h-screen bg-[#F9FAFB] py-12 px-4 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-8 md:mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <Link
                            href="/"
                            className="h-9 px-4 rounded-lg bg-blue-600 inline-flex items-center text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-sm"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Link>

                        <button
                            onClick={handleLogout}
                            className="h-9 px-4 py-2 rounded-lg bg-red-600 inline-flex items-center text-sm font-medium text-white hover:bg-red-700 transition-colors shadow-sm"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </button>
                    </div>

                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            Admin Dashboard
                        </h1>
                        <p className="text-base text-gray-600">
                            Manage your electronics manufacturing quote requests
                        </p>
                    </div>
                </div>

                {fetchError ? (
                    <div className="bg-white rounded-xl border border-red-200 p-4 mb-6 shadow-sm">
                        <div className="text-sm font-semibold text-red-700">Unable to load quotes</div>
                        <div className="text-sm text-red-600 mt-1">{fetchError}</div>
                    </div>
                ) : null}

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-black/10 p-6 shadow-sm flex flex-col"
                        >
                            <span className="text-sm text-gray-600 mb-1">
                                {stat.label}
                            </span>
                            <div className="flex items-center justify-between mt-auto">
                                <span
                                    className={`text-3xl font-bold ${stat.color || "text-black"}`}
                                >
                                    {stat.value}
                                </span>
                                {stat.badge || stat.icon}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Search & Filter Section */}
                <div className="bg-white rounded-xl border border-black/10 p-6 mb-6 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 space-y-2">
                            <label className="text-sm font-medium text-black">
                                Search
                            </label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search by name, company, or service type..."
                                    className="w-full h-9 pl-10 pr-3 py-1 bg-[#f3f3f5] border border-transparent rounded-md text-sm md:text-sm outline-none focus:ring-2 focus:ring-blue-600/20 transition-all font-normal placeholder:text-gray-400"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-black">
                                Filter by Status
                            </label>
                            <div className="relative">
                                <button
                                    onClick={() =>
                                        setIsFilterOpen(!isFilterOpen)
                                    }
                                    className="h-9 w-full md:w-48 px-3 py-2 bg-[#f3f3f5] border border-gray-200 rounded-md flex items-center justify-between text-sm transition-all text-gray-700"
                                >
                                    <div className="flex items-center">
                                        <Filter className="w-4 h-4 mr-2 text-gray-500" />
                                        <span>{statusFilter}</span>
                                    </div>
                                    <ChevronDown
                                        className={`w-4 h-4 opacity-50 transition-transform ${isFilterOpen ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {isFilterOpen && (
                                    <div className="absolute top-full right-0 mt-1 w-full md:w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10">
                                        {statuses.map((status) => (
                                            <button
                                                key={status}
                                                onClick={() => {
                                                    setStatusFilter(status);
                                                    setIsFilterOpen(false);
                                                }}
                                                className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${statusFilter === status ? "text-blue-600 font-medium" : "text-gray-700"}`}
                                            >
                                                {status}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quotes List or Empty State */}
                {isFetching ? (
                    <div className="bg-white rounded-xl border border-black/10 py-16 shadow-sm text-center">
                        <p className="text-base text-gray-600">Loading quotes...</p>
                    </div>
                ) : filteredQuotes.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6">
                        {filteredQuotes.map((quote) => (
                            <div
                                key={quote.id}
                                className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm"
                            >
                                {/* Header: Name & Status */}
                                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {quote.name}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                                            <div className="flex items-center gap-1">
                                                <span className="text-lg">
                                                    🏢
                                                </span>
                                                {quote.company}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="text-lg">
                                                    📧
                                                </span>
                                                {quote.email}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="text-lg">
                                                    📅
                                                </span>
                                                {quote.date}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                                            ${quote.status === "New"
                                                    ? "bg-blue-100 text-blue-700"
                                                    : quote.status ===
                                                        "Contacted"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : quote.status ===
                                                            "Finalized"
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-gray-100 text-gray-700"
                                                }`}
                                        >
                                            {quote.status}
                                        </span>
                                        <button
                                            onClick={() =>
                                                deleteQuote(quote.id)
                                            }
                                            className="text-gray-400 hover:text-red-500 transition-colors"
                                            title="Delete Quote"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Details Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-6 text-sm">
                                    <div>
                                        <span className="block text-gray-500 mb-1">
                                            Service Type
                                        </span>
                                        <div className="flex items-center gap-2">
                                            {getServiceIcon(quote.serviceType)}
                                            <span className="block font-semibold text-gray-900 text-base">
                                                {quote.serviceType || "-"}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="block text-gray-500 mb-1">
                                            Product Type
                                        </span>
                                        <span className="block font-semibold text-gray-900 text-base">
                                            {quote.productType || "-"}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="block text-gray-500 mb-1">
                                            Quantity
                                        </span>
                                        <span className="block font-semibold text-gray-900 text-base">
                                            {quote.quantity || "-"}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="block text-gray-500 mb-1">
                                            Urgency
                                        </span>
                                        <span className="block font-semibold text-gray-900 text-base">
                                            {quote.urgency || "-"}
                                        </span>
                                    </div>
                                </div>

                                {/* Custom Requirements */}
                                <div className="mb-6">
                                    <span className="block text-gray-500 mb-2 text-sm">
                                        Project Requirements
                                    </span>
                                    <div className="bg-gray-50 rounded-lg p-4 text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                                        {quote.requirements ||
                                            "No specific requirements provided."}
                                    </div>
                                </div>

                                {/* Update Status Actions */}
                                <div className="border-t border-gray-100 pt-4">
                                    <span className="block text-sm font-semibold text-gray-900 mb-3">
                                        Update Status:
                                    </span>
                                    <div className="flex flex-wrap gap-3">
                                        {["New", "Contacted", "Finalized"].map(
                                            (status) => (
                                                <button
                                                    key={status}
                                                    onClick={() =>
                                                        updateStatus(
                                                            quote.id,
                                                            status,
                                                        )
                                                    }
                                                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all
                                                    ${quote.status === status
                                                            ? status === "New"
                                                                ? "bg-blue-600 text-white"
                                                                : status ===
                                                                    "Contacted"
                                                                    ? "bg-yellow-500 text-white"
                                                                    : "bg-green-600 text-white shadow-sm"
                                                            : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                                                        }`}
                                                >
                                                    {status}
                                                </button>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-xl border border-black/10 py-24 shadow-sm text-center">
                        <div className="flex flex-col items-center">
                            <Package className="w-16 h-16 text-gray-300 mb-4" />
                            <h2 className="text-xl font-semibold text-black mb-2">
                                No quote requests found
                            </h2>
                            <p className="text-base text-gray-600">
                                Electronics manufacturing quote requests will appear here once customers
                                submit them
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}