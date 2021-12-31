import NavbarItem from "./NavbarItem"

const Navbar = () => {
    return (
        <div class="row navbar-container">
            <NavbarItem title='Coure Info'/>
            <NavbarItem title = 'Resources'/>
            <NavbarItem title='Syllabus'/>
            <NavbarItem title='Piazza'/>
        </div>
    )
}

export default Navbar
