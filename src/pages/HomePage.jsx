import Introduction from '../components/Introduction';
import Experience from '../components/Experience';
import Publications from '../components/Publications';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import InterestingStuff from '../components/InterestingStuff';


const HomePage = () => {
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

export default HomePage;