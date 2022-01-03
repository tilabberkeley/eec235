import Footer from "./Footer"
import Schedule from "./Schedule"
import Navbar from "./Navbar"
import Alert from "react-bootstrap/Alert"
const Home = () => {
    return (
        <>        
            <Navbar current="Home"/>
            <div className="course-container">
            <h1>EE C235: Nanoscale Fabrication</h1>
            <h5 className="secondary-heading">Instructor: Grigory Tikhomirov</h5>
            <h5 className="secondary-heading">Lecture: WF 2:30 - 4:00pm</h5>
            </div>
            <div className="alert-container">
            <Alert variant={'secondary'}>
            <h5>Annoucements: </h5>
            &emsp; No annoucements yet.
            </Alert>
            </div>
            <Schedule/>
            <Footer/>
        </>
    )
}

export default Home
