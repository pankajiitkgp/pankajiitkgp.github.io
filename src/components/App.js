import { Routes, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Footer from './Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import Publication from '../pages/Publication'
import Research from '../pages/Research'
//import Blog from '../pages/Blog'

const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/research" element={<Research />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
