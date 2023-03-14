import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import home from './pages/home'
import sobre from './pages/sobre'

export default function App() {
  return (
    <Router>
        <div className="App">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Sobre</Link></li>
          </ul>
        </div>
      
      <Routes>
        <Route path='/' element={<home />}/>
        <Route path='/' element={<sobre />}/>
      </Routes>
    </Router>
  )
}
