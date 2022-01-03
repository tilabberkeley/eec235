import NavbarItem from "./NavbarItem"

const Navbar = ({ current }) => {
    return (
        <div className="row navbar-container">
            <div className="col-md-8">
                <NavbarItem text='EE C235' title={true} link='/'/>
            </div>
            <div className="navbar-spacing col-md-1">
                <NavbarItem text='Course Info' link='/info' selected={current === 'Info'}/>
            </div>
            <div className="navbar-spacing col-md-1">
                <NavbarItem text = 'Resources' link='resources' selected={current === 'Resources'}/>
            </div>
            <div className="navbar-spacing col-md-1">
                <NavbarItem text='Piazza' link='#'/>
            </div>
            <div className="navbar-spacing col-md-1">
                <NavbarItem text='Gradescope' link='#'/>
            </div>
            
        </div>
    )
}

export default Navbar
