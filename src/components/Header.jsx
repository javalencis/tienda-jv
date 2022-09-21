import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header>
        <div>
            <img src="" alt="logo jv" />
        </div>
        <nav>
            <ul>
                <li><NavLink to="/">All</NavLink></li>
                <li><NavLink to="/clothes">Clothes</NavLink></li>
                <li><NavLink to="/eletronics">Eletronics</NavLink></li>
                <li><NavLink to="/furniture">Furniture</NavLink></li>
                <li><NavLink to="/shoes">Shoes</NavLink></li>
                <li><NavLink to="/others">Others</NavLink></li>             
            </ul>
        </nav>
    </header>
  )
}
