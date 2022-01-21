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
            &emsp; Per university guidelines, the first two weeks of instructions will be conducted remotely. <a target="_blank" href="https://berkeley.zoom.us/j/7181519086">Zoom link</a> for lectures.
            </Alert>
            </div>
            <Schedule/>
            <Footer/>
        </>
    )
}

export default Home
