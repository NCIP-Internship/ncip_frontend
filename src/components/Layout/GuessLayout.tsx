import Header from "../Templates/Header/Header"
import { Outlet } from "react-router-dom"

const GuessLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  )
}

export default GuessLayout
