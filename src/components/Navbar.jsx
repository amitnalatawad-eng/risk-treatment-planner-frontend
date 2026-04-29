import { NavLink, useNavigate } from 'react-router-dom'
import { BarChart3, LayoutDashboard, List, LogOut, Plus } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const linkClasses = ({ isActive }) =>
  [
    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-white/20 text-white'
      : 'text-white/90 hover:bg-white/15 hover:text-white',
  ].join(' ')

export default function Navbar() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/', { replace: true })
  }

  return (
    <header className="sticky top-0 z-10 border-b bg-gradient-to-r from-[#1B4F8A] to-[#163f6f] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15">
            <LayoutDashboard className="h-5 w-5 text-white" aria-hidden="true" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-white">
              Risk Treatment Planner
            </div>
            <div className="text-xs text-white/75">Plan, track, and analyze risks</div>
          </div>
        </div>

        <nav className="flex items-center gap-1 overflow-x-auto">
          <NavLink to="/dashboard" className={linkClasses}>
            <LayoutDashboard className="mr-2 h-4 w-4" aria-hidden="true" />
            Dashboard
          </NavLink>
          <NavLink to="/list" className={linkClasses}>
            <List className="mr-2 h-4 w-4" aria-hidden="true" />
            List
          </NavLink>
          <NavLink to="/create" className={linkClasses}>
            <Plus className="mr-2 h-4 w-4" aria-hidden="true" />
            Create
          </NavLink>
          <NavLink to="/analytics" className={linkClasses}>
            <BarChart3 className="mr-2 h-4 w-4" aria-hidden="true" />
            Analytics
          </NavLink>
          <button
            type="button"
            onClick={handleLogout}
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500/30"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
            Logout
          </button>
        </nav>
      </div>
    </header>
  )
}

