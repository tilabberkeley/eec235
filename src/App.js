import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import Alert from 'react-bootstrap/Alert'

const App = () => {
  return (
  <>
    <Navbar/>
    <div className="course-container">
      <h1>EE C235: Nanoscale Fabrication</h1>
      <h5>Instructor: Grigory Tikhomirov</h5>
      <h5>Lecture: WF 2:30 - 4:00pm</h5>
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
  );
}

export default App;
