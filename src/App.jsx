import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>} />
            {/*<Route path="/pokemon/:id" element={<Pokemon />} />*/}
            {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
    </>
  )
}

export default App
