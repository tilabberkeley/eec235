import './NavbarItem.css'

const NavbarItem = ({ text, link, title }) => {
    return (
           title == 'true' ? <h3><a href={link} className="main-title navbar-link"><strong>{text}</strong></a></h3> : <a className="navbar-link" href={link}>{text}</a>
    )
}

export default NavbarItem
