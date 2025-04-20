import Introduction from './components/Introduction'
import Projects from "./components/Projects.jsx";
import InterestingStuff from "./components/InterestingStuff.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Publications from "./components/Publications.jsx";

function App() {

  return (
    <>
        <Introduction />
        <Experience />
        <Publications/>
        <Projects/>
        <Contact/>
        <InterestingStuff/>
    </>
  )
}

export default App
