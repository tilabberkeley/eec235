import Resources from "./components/Resources"
import Home from "./components/Home"
import Info from "./components/Info"
import Syllabus from "./components/Syllabus"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/info" element={<Info />}/>
      <Route path="/resources" element={<Resources />}/>
      <Route path="/syllabus" element={<Syllabus />}/>
    </Routes>
  </Router>
  );
}

export default App;
