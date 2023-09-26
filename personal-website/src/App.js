import Header from './components/Header'
import Game from './components/TicTacToe/Game'
import Sections from './components/Sections'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
    return (
        <div className="App">
            <Header />
            <Game />
            <Sections />
        </div>
    )
}
export default App;