import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Contact from './components/Contact/Contact'
import Blogs from './components/Blogs/Blogs'
import About from './components/About/About'
import HeaderPage from './components/Header/HeaderPage'
import Navbar from './components/Navbar/Navbar'
import './App.css'

function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<HeaderPage></HeaderPage>}/>
          <Route path='/About' element={<About></About>}/>
          <Route path='Blogs' element={<Blogs></Blogs>} />
          <Route path='/Contact' element={<Contact></Contact>}/>
        </Routes>
      </Router>
      {/* <Navbar /> */}
    </>
  )
}

export default App
