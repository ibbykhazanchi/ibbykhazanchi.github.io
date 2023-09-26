import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Sections from './components/Sections'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
    return (
        <div className="App">
            <Header />
            <LandingPage />
            <Sections />
        </div>
    )
}
export default App;