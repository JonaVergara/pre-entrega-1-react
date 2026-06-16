import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";
import "./layout.css"

const LayoutApp = ({children}) => {
  return (
    <div className="layout">
      <NavBar/>
        <main className="main-content">
            <Outlet/>
        </main>
      <Footer/>
    </div>
  )
}

export default LayoutApp