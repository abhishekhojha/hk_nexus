"use client";

import { useEffect, useState } from "react";
import {
  Loader2,
  Briefcase,
  Trash2,
  Plus,
  Pencil,
  X,
  MapPin,
  Building2,
} from "lucide-react";
import { toast } from "sonner";

interface JobOpening {
  _id: string;
  title: string;
  type: string;
  workMode: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  city: string;
  state: string;
  country: string;
  isActive: boolean;
  createdAt: string;
}

const defaultFormData = {
  title: "",
  type: "Full-Time",
  workMode: "On-site",
  summary: "",
  responsibilities: [""],
  requirements: [""],
  city: "",
  state: "",
  country: "India",
  isActive: true,
};

export default function JobOpeningsPage() {
  const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([]);
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
    active: 0,
    inactive: 0,
  });

  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState<JobOpening | null>(null);
  const [formData, setFormData] = useState(defaultFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [deleteModal, setDeleteModal] = useState<{
    show: boolean;
    id: string | null;
  }>({ show: false, id: null });

  useEffect(() => {
    fetchJobOpenings(pagination.page);
  }, [pagination.page]);

  const fetchJobOpenings = async (page: number) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/admin/job-openings?page=${page}&limit=${pagination.limit}`
      );
      if (res.ok) {
        const data = await res.json();
        setJobOpenings(data.jobOpenings);
        setPagination(data.pagination);
        setStats(data.stats);
      }
    } catch (error) {
      console.log("Failed to fetch job openings", error);
      toast.error("Failed to fetch job openings");
    } finally {
      setLoading(false);
    }
  };

  const openCreateModal = () => {
    setEditingJob(null);
    setFormData(defaultFormData);
    setShowModal(true);
  };

  const openEditModal = (job: JobOpening) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      type: job.type,
      workMode: job.workMode,
      summary: job.summary,
      responsibilities: job.responsibilities,
      requirements: job.requirements,
      city: job.city,
      state: job.state,
      country: job.country,
      isActive: job.isActive,
    });
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Filter out empty strings from arrays
    const cleanedData = {
      ...formData,
      responsibilities: formData.responsibilities.filter(
        (r) => r.trim() !== ""
      ),
      requirements: formData.requirements.filter((r) => r.trim() !== ""),
    };

    if (cleanedData.responsibilities.length === 0) {
      toast.error("At least one responsibility is required");
      return;
    }
    if (cleanedData.requirements.length === 0) {
      toast.error("At least one requirement is required");
      return;
    }

    setIsSubmitting(true);

    try {
      const url = editingJob
        ? `/api/admin/job-openings/${editingJob._id}`
        : "/api/admin/job-openings";
      const method = editingJob ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanedData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(
          editingJob
            ? "Job opening updated successfully"
            : "Job opening created successfully"
        );
        setShowModal(false);
        fetchJobOpenings(pagination.page);
      } else {
        toast.error(data.error || "Failed to save job opening");
      }
    } catch (error) {
      console.error("Save error:", error);
      toast.error("An error occurred while saving");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggleStatus = async (job: JobOpening) => {
    try {
      const res = await fetch(`/api/admin/job-openings/${job._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !job.isActive }),
      });

      if (res.ok) {
        toast.success(
          `Job ${job.isActive ? "deactivated" : "activated"} successfully`
        );
        fetchJobOpenings(pagination.page);
      } else {
        toast.error("Failed to update status");
      }
    } catch (error) {
      console.error("Status update error:", error);
      toast.error("An error occurred");
    }
  };

  const confirmDelete = (id: string) => {
    setDeleteModal({ show: true, id });
  };

  const handleDelete = async () => {
    if (!deleteModal.id) return;

    try {
      const res = await fetch(`/api/admin/job-openings/${deleteModal.id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Job opening deleted successfully");
        setDeleteModal({ show: false, id: null });
        fetchJobOpenings(pagination.page);
      } else {
        toast.error("Failed to delete job opening");
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

  const addArrayItem = (field: "responsibilities" | "requirements") => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const removeArrayItem = (
    field: "responsibilities" | "requirements",
    index: number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const updateArrayItem = (
    field: "responsibilities" | "requirements",
    index: number,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  if (loading && jobOpenings.length === 0) {
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
                Are you sure you want to delete this job opening? This action
                cannot be undone.
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

      {/* Create/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full my-8 max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">
                {editingJob ? "Edit Job Opening" : "Create Job Opening"}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-1 hover:bg-gray-100 rounded-md transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Job Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, title: e.target.value }))
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="e.g., Customer Support Executive"
                />
              </div>

              {/* Type, Work Mode, Active Status */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Job Type *
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, type: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
                  >
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Work Mode *
                  </label>
                  <select
                    value={formData.workMode}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        workMode: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white"
                  >
                    <option value="On-site">On-site</option>
                    <option value="Work from Home">Work from Home</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <div className="flex items-center h-[46px]">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isActive}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            isActive: e.target.checked,
                          }))
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      <span className="ml-3 text-sm font-medium text-gray-900">
                        {formData.isActive ? "Active" : "Inactive"}
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Country *
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        country: e.target.value,
                      }))
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="e.g., India"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    State *
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        state: e.target.value,
                      }))
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="e.g., Madhya Pradesh"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    City *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, city: e.target.value }))
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="e.g., Bhopal"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Summary *
                </label>
                <textarea
                  value={formData.summary}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      summary: e.target.value,
                    }))
                  }
                  required
                  rows={2}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                  placeholder="Brief description of the role..."
                />
              </div>

              {/* Responsibilities */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Key Responsibilities *
                </label>
                {formData.responsibilities.map((resp, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={resp}
                      onChange={(e) =>
                        updateArrayItem(
                          "responsibilities",
                          index,
                          e.target.value
                        )
                      }
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
                      placeholder="Enter responsibility..."
                    />
                    {formData.responsibilities.length > 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          removeArrayItem("responsibilities", index)
                        }
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem("responsibilities")}
                  className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" /> Add Responsibility
                </button>
              </div>

              {/* Requirements */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Requirements *
                </label>
                {formData.requirements.map((req, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={req}
                      onChange={(e) =>
                        updateArrayItem("requirements", index, e.target.value)
                      }
                      className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
                      placeholder="Enter requirement..."
                    />
                    {formData.requirements.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem("requirements", index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem("requirements")}
                  className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" /> Add Requirement
                </button>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? "Saving..."
                    : editingJob
                    ? "Update Job"
                    : "Create Job"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Job Openings</h1>
          <p className="text-gray-500 mt-1">
            Create and manage job listings for your careers page.
          </p>
        </div>
        <button
          onClick={openCreateModal}
          className="flex items-center px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm shadow-primary/30"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Job Opening
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-medium text-gray-500 uppercase">
            Total Jobs
          </p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{stats.total}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-medium text-gray-500 uppercase">Active</p>
          <p className="text-2xl font-bold text-green-600 mt-1">
            {stats.active}
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-medium text-gray-500 uppercase">
            Inactive
          </p>
          <p className="text-2xl font-bold text-orange-600 mt-1">
            {stats.inactive}
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-medium text-gray-500 uppercase">
            New This Month
          </p>
          <p className="text-2xl font-bold text-blue-600 mt-1">
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
                  Job Title
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Type / Mode
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {jobOpenings.length === 0 ? (
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
                        No job openings yet
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Click &quot;Add Job Opening&quot; to create your first
                        listing.
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                jobOpenings.map((job) => (
                  <tr
                    key={job._id}
                    className="hover:bg-gray-50/80 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-tr from-primary/20 to-purple-100 flex items-center justify-center mr-3 text-primary">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-900">
                            {job.title}
                          </span>
                          <p className="text-xs text-gray-500 line-clamp-1 max-w-xs">
                            {job.summary}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                          {job.type}
                        </span>
                        <div className="flex items-center text-xs text-gray-500 gap-1">
                          <Building2 className="w-3 h-3" /> {job.workMode}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-sm text-gray-600 gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.city}, {job.state}
                      </div>
                      <p className="text-xs text-gray-400">{job.country}</p>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleToggleStatus(job)}
                        className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                          job.isActive
                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        {job.isActive ? "Active" : "Inactive"}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(job.createdAt).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEditModal(job)}
                          className="text-gray-400 hover:text-primary transition-colors p-1 rounded-md hover:bg-primary/10"
                          title="Edit Job"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => confirmDelete(job._id)}
                          className="text-gray-400 hover:text-red-600 transition-colors p-1 rounded-md hover:bg-red-50"
                          title="Delete Job"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
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
