import './NavbarItem.css'
import {
    Link
  } from "react-router-dom"

const NavbarItem = ({ text, link, title, selected }) => {
    return (
           title === true ? 
           <h3><Link to={link} className="main-title navbar-link"><strong>{text}</strong></Link></h3> : 
           <a className={selected === true ? "navbar-link active" : "navbar-link"} href={link}>{text}</a>
    )
}

export default NavbarItem
