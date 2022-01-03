import NavbarItem from './NavbarItem'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <footer className="pt-4 my-md-5 pt-md-5 border-top">
                <div className="row">
                    <div className="col md-3 footer-link">
                        <NavbarItem text='Course Info' link='/info'/>
                    </div>
                    <div className="col md-3 footer-link">
                        <NavbarItem text = 'Resources' link='resources'/>
                    </div>
                    <div className="col md-3 footer-link">
                        <NavbarItem text='Piazza' link='#'/>
                    </div>
                    <div className="col md-3 footer-link">
                        <NavbarItem text='Gradescope' link='#'/>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
