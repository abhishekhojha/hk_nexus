"use client";

import { useEffect, useState } from "react";
import { Loader2, MessageSquare, Download, Trash2, Mail } from "lucide-react";
import { toast } from "sonner";

interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "new" | "read" | "replied";
  createdAt: string;
}

export default function ContactMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
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
    total: 0,
    newThisMonth: 0,
    pending: 0,
  });
  const [deleteModal, setDeleteModal] = useState<{
    show: boolean;
    id: string | null;
  }>({ show: false, id: null });

  useEffect(() => {
    fetchMessages(pagination.page);
  }, [pagination.page]);

  const fetchMessages = async (page: number) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/contact/messages?page=${page}&limit=${pagination.limit}`
      );
      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages);
        setPagination(data.pagination);
        setStats(data.stats);
      }
    } catch (error) {
      console.log("Failed to fetch messages", error);
      toast.error("Failed to fetch messages");
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async () => {
    try {
      const limit = exportOption === "all" ? 0 : exportCount;
      const res = await fetch(`/api/contact/messages?limit=${limit}`);
      if (res.ok) {
        const data = await res.json();
        const csvContent = [
          ["Name", "Email", "Subject", "Message", "Status", "Date"],
          ...data.messages.map((msg: ContactMessage) => [
            msg.name,
            msg.email,
            msg.subject,
            msg.message.replace(/\n/g, " "),
            msg.status,
            new Date(msg.createdAt).toLocaleDateString(),
          ]),
        ]
          .map((e) => e.map((field: string) => `"${field}"`).join(","))
          .join("\n");

        const blob = new Blob([csvContent], {
          type: "text/csv;charset=utf-8;",
        });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "contact-messages.csv");
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

  const confirmDelete = (id: string) => {
    setDeleteModal({ show: true, id });
  };

  const handleDelete = async () => {
    if (!deleteModal.id) return;

    try {
      const res = await fetch(`/api/contact/messages/${deleteModal.id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Message deleted successfully");
        setDeleteModal({ show: false, id: null });
        fetchMessages(pagination.page);
      } else {
        toast.error("Failed to delete message");
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

  if (loading && messages.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-8 relative">
      {/* Delete Confirmation Modal */}
      {deleteModal.show && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 space-y-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Confirm Deletion
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Are you sure you want to delete this contact message? This
                action cannot be undone.
              </p>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setDeleteModal({ show: false, id: null })}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Export Modal */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Export Contact Messages
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
                  Export All Messages
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
          <h1 className="text-2xl font-bold text-gray-900">Contact Messages</h1>
          <p className="text-gray-500 mt-1">
            View and manage contact form submissions.
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
            Total Messages
          </p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{stats.total}</p>
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
          <p className="text-xs font-medium text-gray-500 uppercase">Pending</p>
          <p className="text-2xl font-bold text-orange-600 mt-1">
            {stats.pending}
          </p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Message
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {messages.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                        <MessageSquare className="w-6 h-6 text-gray-400" />
                      </div>
                      <p className="text-base font-medium text-gray-900">
                        No messages yet
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Contact form submissions will appear here.
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                messages.map((message) => (
                  <tr
                    key={message._id}
                    className="hover:bg-gray-50/80 transition-colors group"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-tr from-primary/20 to-purple-100 flex items-center justify-center mr-3 text-primary font-bold text-xs">
                          {message.name[0].toUpperCase()}
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {message.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a
                        href={`mailto:${message.email}`}
                        className="text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-1"
                      >
                        <Mail className="w-3 h-3" />
                        {message.email}
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900 line-clamp-1">
                        {message.subject}
                      </span>
                    </td>
                    <td className="px-6 py-4 max-w-xs">
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {message.message}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(message.createdAt).toLocaleDateString(
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
                        onClick={() => confirmDelete(message._id)}
                        className="text-gray-400 hover:text-red-600 transition-colors p-1 rounded-md hover:bg-red-50"
                        title="Delete Message"
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
