import NavbarItem from "./NavbarItem"

const Navbar = () => {
    return (
        <div className="row navbar-container">
            <div className="col-md-8">
                <NavbarItem text='EE C235' title='true' link='/'/>
            </div>
            <div className="col-md-1">
                <NavbarItem text='Course Info' link='/info'/>
            </div>
            <div className="col-md-1">
                <NavbarItem text = 'Resources' link='resources'/>
            </div>
            <div className="col-md-1">
                <NavbarItem text='Syllabus' link='syllabus'/>
            </div>
            <div className="col-md-1">
                <NavbarItem text='Piazza' link='#'/>
            </div>
            
        </div>
    )
}

export default Navbar
