import Nav from './nav'
import Hero from './hero'
import Articles from './articles'

//import './App.css';
function Home() {
    return (
        <>
        <Nav/>
            <main style={{
                minHeight: "100vh"
            }}>
                <Hero />
                <Articles/>
        </main>
        </>
    );
}

export default Home;