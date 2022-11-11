import { Header } from "../components/Header"
import { AppProvider } from "../context/AppContext"

export const Layout = ({children}) => {
  return (
    <>
        <Header/>
        {children}
    </>
  )
}
