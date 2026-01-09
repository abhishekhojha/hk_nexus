"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  LogOut,
  LayoutDashboard,
  Settings,
  Users,
  Mail,
  Menu,
  X,
  MessageSquare,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin");
    }
  }, [status, router]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const navItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    // { href: "#", label: "Users", icon: Users },
    { href: "/admin/newsletter", label: "Newsletter", icon: Mail },
    { href: "/admin/contact", label: "Contact Messages", icon: MessageSquare },
    { href: "/admin/careers", label: "Job Applications", icon: Briefcase },
    { href: "/admin/job-openings", label: "Job Openings", icon: Briefcase },
    // { href: "#", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out flex flex-col h-full md:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="h-8 bg-primary rounded-lg flex items-center justify-center px-2">
              <span className="text-white font-bold text-xl">HK</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Nexus</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="md:hidden text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
            Main Menu
          </p>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 mr-3 transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-4 border-t border-gray-100">
          <button
            onClick={() => signOut({ callbackUrl: "/admin" })}
            className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors group"
          >
            <LogOut className="w-5 h-5 mr-3 text-red-400 group-hover:text-red-600 transition-colors" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 min-h-screen bg-gray-50/50">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 sticky top-0 z-20 px-4 md:px-8 flex items-center justify-between md:justify-end">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 -ml-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative">
              <Mail className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block"></div>

            <div className="flex items-center gap-3 pl-2">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-gray-900 leading-none">
                  {session.user?.email?.split("@")[0]}
                </p>
                <p className="text-xs text-gray-500 mt-1 capitalize">
                  {session.user?.role || "Administrator"}
                </p>
              </div>
              <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center text-white font-bold shadow-md ring-2 ring-white">
                {session.user?.email?.[0].toUpperCase()}
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 md:p-8 max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
