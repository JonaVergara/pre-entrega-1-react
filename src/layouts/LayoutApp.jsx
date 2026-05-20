import NavBar from "../components/NavBar/NavBar";

const LayoutApp = ({children}) => {
  return (
    <>
        <NavBar/>
        <main>
            {children}
        </main>
    </>
  )
}

export default LayoutApp