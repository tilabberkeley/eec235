import NavbarItem from "./NavbarItem"

const Navbar = () => {
    return (
        <div className="navbar navbar-light navbar-expand-lg">
            <div className="col-md-4">
                <NavbarItem text='EE C235' title='true' link='/'/>
            </div>
            <div className="col-md-2">
                <NavbarItem text='Course Info' link='/info'/>
            </div>
            <div className="col-md-2">
                <NavbarItem text = 'Resources' link='resources'/>
            </div>
            <div className="col-md-2">
                <NavbarItem text='Syllabus' link='syllabus'/>
            </div>
            <div className="col-md-2">
                <NavbarItem text='Piazza' link='#'/>
            </div>
            
        </div>
    )
}

export default Navbar
