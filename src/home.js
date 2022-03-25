import Nav from './nav'
import Hero from './hero'
//import './App.css';
function Home() {
    return (
        <>
        <Nav/>
            <main style={{
                minHeight: "300vh"
            }}>
                <Hero />

                
        </main>
        </>
    );
}

export default Home;