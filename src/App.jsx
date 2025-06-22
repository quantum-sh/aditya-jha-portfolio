import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import ExperiencePage from "./pages/ExperiencePage"
import ProjectsPage from "./pages/ProjectPage"
import ContactPage from "./pages/ContactPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<HomePage/>}/>
          <Route path = "/experience" element = {<ExperiencePage/>}/>
          <Route path = "/projects" element = {<ProjectsPage/>}/>
          <Route path = "/contact" element = {<ContactPage/>}/>
          <Route path = "/vault" element = {<div>Vault Page</div>}/>
          <Route path = "/articles" element = {<div>My Articles Page</div>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
