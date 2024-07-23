import Home from './Home'
import Footer from './components/Footer'
import Counter from './Counter'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StateContext } from './context/StateContext'

function App() {
  return (
    <>
      <BrowserRouter>
        <StateContext>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/counter' element={<Counter />} />
          </Routes>
          <ScrollToTop />
        </StateContext>
      </BrowserRouter>
    </>
  )
}

export default App
