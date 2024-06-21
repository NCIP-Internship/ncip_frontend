import { Outlet } from "react-router-dom"
import Sidebar from "../Templates/Sidebar"

const AuthenticatedLayout = () => {
  return (
    <main className="flex">
      <Sidebar />
      <Outlet />
    </main>
  )
}

export default AuthenticatedLayout
