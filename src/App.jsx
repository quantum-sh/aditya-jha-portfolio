import { HashRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import ExperiencePage from "./pages/ExperiencePage"
import ProjectsPage from "./pages/ProjectPage"
import ContactPage from "./pages/ContactPage"
import InterestingStuff from "./pages/InterestingStuff"
import Articles from "./pages/Articles"

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<HomePage/>}/>
          <Route path = "/experience" element = {<ExperiencePage/>}/>
          <Route path = "/projects" element = {<ProjectsPage/>}/>
          <Route path = "/contact" element = {<ContactPage/>}/>
          <Route path = "/vault" element = {<InterestingStuff/>}/>
          <Route path = "/articles" element = {<Articles/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
