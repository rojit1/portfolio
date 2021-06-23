import Nav from './Nav';
import About from './About'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills';

function Home() {
    return (
        <div className="main">

                <div className="effect-1">

                </div>

                <div className="effect-2">

                </div>


            
            <Nav />

            <div className="container-fluid p-0">
                
                <About />

                <hr className="m-0" />

                <Experience />

                <hr className="m-0" />

                <Education />
                <hr className="m-0" />

                <Skills />
                
            </div>

        </div>
    )
}

export default Home