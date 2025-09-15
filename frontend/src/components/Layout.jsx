import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Layout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="h-16 flex items-center justify-center border-b">
          <h1 className="text-xl font-bold text-blue-600">X DM SaaS</h1>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/campaigns"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                Campaigns
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/leads"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                Leads
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/templates"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                Templates
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/billing"
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium ${
                    isActive ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                Billing
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="w-full px-3 py-2 text-sm font-medium text-red-600 border rounded-md hover:bg-red-50"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6">
          <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{user?.email}</span>
            <div className="px-3 py-1 text-sm rounded bg-blue-100 text-blue-600">
              Credits: 100
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
