"use client";

import { useEffect, useState } from "react";
import {
  Loader2,
  Briefcase,
  Download,
  Trash2,
  Mail,
  Phone,
  FileText,
} from "lucide-react";
import { toast } from "sonner";

interface JobApplication {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  resumeFilename: string;
  resumeMimeType: string;
  resumeSize: number;
  createdAt: string;
}

export default function JobApplicationsPage() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1,
  });
  const [stats, setStats] = useState({
    total: 0,
    newThisMonth: 0,
  });
  const [deleteModal, setDeleteModal] = useState<{
    show: boolean;
    id: string | null;
  }>({ show: false, id: null });

  useEffect(() => {
    fetchApplications(pagination.page);
  }, [pagination.page]);

  const fetchApplications = async (page: number) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/careers/applications?page=${page}&limit=${pagination.limit}`
      );
      if (res.ok) {
        const data = await res.json();
        setApplications(data.applications);
        setPagination(data.pagination);
        setStats(data.stats);
      }
    } catch (error) {
      console.log("Failed to fetch applications", error);
      toast.error("Failed to fetch applications");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadResume = (applicationId: string, filename: string) => {
    window.open(`/api/careers/resume/${applicationId}`, "_blank");
  };

  const confirmDelete = (id: string) => {
    setDeleteModal({ show: true, id });
  };

  const handleDelete = async () => {
    if (!deleteModal.id) return;

    try {
      const res = await fetch(`/api/careers/applications/${deleteModal.id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Application deleted successfully");
        setDeleteModal({ show: false, id: null });
        fetchApplications(pagination.page);
      } else {
        toast.error(data.error || "Failed to delete application");
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

  if (loading && applications.length === 0) {
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
                Are you sure you want to delete this job application? This
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
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Job Applications</h1>
          <p className="text-gray-500 mt-1">
            View and manage career applications.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-medium text-gray-500 uppercase">
            Total Applications
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
                  Contact
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Resume
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Applied Date
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {applications.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                        <Briefcase className="w-6 h-6 text-gray-400" />
                      </div>
                      <p className="text-base font-medium text-gray-900">
                        No applications yet
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Job applications will appear here.
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                applications.map((application) => (
                  <tr
                    key={application._id}
                    className="hover:bg-gray-50/80 transition-colors group"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-tr from-primary/20 to-purple-100 flex items-center justify-center mr-3 text-primary font-bold text-xs">
                          {application.fullName[0].toUpperCase()}
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {application.fullName}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <a
                          href={`mailto:${application.email}`}
                          className="text-xs text-gray-600 hover:text-primary transition-colors flex items-center gap-1"
                        >
                          <Mail className="w-3 h-3" />
                          {application.email}
                        </a>
                        <a
                          href={`tel:${application.phone}`}
                          className="text-xs text-gray-600 hover:text-primary transition-colors flex items-center gap-1"
                        >
                          <Phone className="w-3 h-3" />
                          {application.phone}
                        </a>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900">
                        {application.position}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() =>
                          handleDownloadResume(
                            application._id,
                            application.resumeFilename
                          )
                        }
                        className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        <span className="line-clamp-1">
                          {application.resumeFilename}
                        </span>
                      </button>
                      <p className="text-xs text-gray-500 mt-1">
                        {(application.resumeSize / 1024).toFixed(2)} KB
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(application.createdAt).toLocaleDateString(
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
                        onClick={() => confirmDelete(application._id)}
                        className="text-gray-400 hover:text-red-600 transition-colors p-1 rounded-md hover:bg-red-50"
                        title="Delete Application"
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
