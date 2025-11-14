
import './App.css'
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Expertise from './components/sections/Expertise';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Products from './components/sections/Products';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import Wrapper from './components/common/Wrapper';  
import Stats from './components/sections/Stats';
import Signup from './components/sections/Signup';
import Login from './components/sections/Login';
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>

          <Header />
          <Hero />

        <Wrapper className="absolute top-100 left-0 right-0 mx-auto w-11/12 md:w-3/4 md:absolute md:top-145 md:left-0 md:right-0 md:mx-auto">
          <Stats />
        </Wrapper>

        <Wrapper className="bg-gray-100">
          <Expertise />
        </Wrapper>

        <Wrapper className="bg-gray-100">
           <Services />        
       </Wrapper>

        <Wrapper className="bg-gray-100">
           <About />
        </Wrapper>

        <Wrapper className="bg-gray-100">
           <Products />
        </Wrapper>

        <Wrapper className="bg-gray-100">
          <Testimonials />
        </Wrapper>

         <Wrapper className="bg-violet-500">
         <Contact />
         </Wrapper>
    

         <Wrapper className="bg-violet-700">
          <Footer />
         </Wrapper>
        
      

        </>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
