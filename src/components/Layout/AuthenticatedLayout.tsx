import { Outlet } from "react-router-dom"
import Sidebar from "../Templates/Sidebar"
import HeaderAuthorized from '../Templates/Header/Header[authorized]'

const AuthenticatedLayout = () => {
  return (
    <main className="flex w-full">
      <Sidebar />
      <section className="w-full">
        <HeaderAuthorized />
        <Outlet />
      </section>
    </main>
  )
}

export default AuthenticatedLayout
