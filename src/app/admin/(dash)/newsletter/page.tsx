"use client";

import { useEffect, useState } from "react";
import { Loader2, Mail, Download, Search, Filter, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Subscriber {
  _id: string;
  email: string;
  createdAt: string;
}

export default function NewsletterPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1,
  });
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportOption, setExportOption] = useState<"all" | "custom">("all");
  const [exportCount, setExportCount] = useState<number>(100);
  const [stats, setStats] = useState({
    newThisMonth: 0,
  });

  useEffect(() => {
    fetchSubscribers(pagination.page);
  }, [pagination.page]);

  const fetchSubscribers = async (page: number) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/newsletter/subscribers?page=${page}&limit=${pagination.limit}`
      );
      if (res.ok) {
        const data = await res.json();
        setSubscribers(data.subscribers);
        setPagination(data.pagination);
        setStats(data.stats);
      }
    } catch (error) {
      console.log("Failed to fetch subscribers", error);
      toast.error("Failed to fetch subscribers");
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async () => {
    try {
      const limit = exportOption === "all" ? 0 : exportCount;
      const res = await fetch(`/api/newsletter/subscribers?limit=${limit}`);
      if (res.ok) {
        const data = await res.json();
        const csvContent = [
          ["Email", "Subscribed Date"],
          ...data.subscribers.map((sub: Subscriber) => [
            sub.email,
            new Date(sub.createdAt).toLocaleDateString(),
          ]),
        ]
          .map((e) => e.join(","))
          .join("\n");

        const blob = new Blob([csvContent], {
          type: "text/csv;charset=utf-8;",
        });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "subscribers.csv");
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowExportModal(false);
        toast.success("Export successful");
      }
    } catch (error) {
      console.error("Failed to export", error);
      toast.error("Failed to export");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this subscriber?")) return;

    try {
      const res = await fetch(`/api/newsletter/subscribers/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Subscriber deleted successfully");
        fetchSubscribers(pagination.page);
      } else {
        toast.error("Failed to delete subscriber");
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("An error occurred while deleting");
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setPagination((prev) => ({ ...prev, page: newPage }));
    }
  };

  if (loading && subscribers.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-8 relative">
      {/* Export Modal */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Export Subscribers
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Choose how many records you want to export.
              </p>
            </div>

            <div className="space-y-4">
              <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="exportOption"
                  value="all"
                  checked={exportOption === "all"}
                  onChange={() => setExportOption("all")}
                  className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                />
                <span className="ml-3 font-medium text-gray-900">
                  Export All Subscribers
                </span>
              </label>

              <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <input
                  type="radio"
                  name="exportOption"
                  value="custom"
                  checked={exportOption === "custom"}
                  onChange={() => setExportOption("custom")}
                  className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                />
                <div className="ml-3 flex-1">
                  <span className="font-medium text-gray-900">
                    Custom Amount
                  </span>
                  {exportOption === "custom" && (
                    <input
                      type="number"
                      min="1"
                      value={exportCount}
                      onChange={(e) =>
                        setExportCount(parseInt(e.target.value) || 0)
                      }
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      onClick={(e) => e.stopPropagation()}
                    />
                  )}
                </div>
              </label>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setShowExportModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleExport}
                className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors shadow-sm shadow-primary/30"
              >
                Export CSV
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Newsletter Subscribers
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your email subscribers and campaigns.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setShowExportModal(true)}
            className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
          >
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-medium text-gray-500 uppercase">
            Total Subscribers
          </p>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            {pagination.total}
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-medium text-gray-500 uppercase">
            New This Month
          </p>
          <p className="text-2xl font-bold text-green-600 mt-1">
            +{stats.newThisMonth}
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-medium text-gray-500 uppercase">
            Avg. Open Rate
          </p>
          <p className="text-2xl font-bold text-gray-400 mt-1">N/A</p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Email Address
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Subscribed Date
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {subscribers.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                        <Mail className="w-6 h-6 text-gray-400" />
                      </div>
                      <p className="text-base font-medium text-gray-900">
                        No subscribers yet
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Share your newsletter link to get started.
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                subscribers.map((subscriber) => (
                  <tr
                    key={subscriber._id}
                    className="hover:bg-gray-50/80 transition-colors group"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-tr from-primary/20 to-purple-100 flex items-center justify-center mr-3 text-primary font-bold text-xs">
                          {subscriber.email[0].toUpperCase()}
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {subscriber.email}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(subscriber.createdAt).toLocaleDateString(
                        undefined,
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleDelete(subscriber._id)}
                        className="text-gray-400 hover:text-red-600 transition-colors p-1 rounded-md hover:bg-red-50"
                        title="Delete Subscriber"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        {pagination.totalPages > 1 && (
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between bg-gray-50">
            <button
              onClick={() => handlePageChange(pagination.page - 1)}
              disabled={pagination.page === 1}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              Previous
            </button>
            <span className="text-sm text-gray-600">
              Page{" "}
              <span className="font-medium text-gray-900">
                {pagination.page}
              </span>{" "}
              of{" "}
              <span className="font-medium text-gray-900">
                {pagination.totalPages}
              </span>
            </span>
            <button
              onClick={() => handlePageChange(pagination.page + 1)}
              disabled={pagination.page === pagination.totalPages}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
