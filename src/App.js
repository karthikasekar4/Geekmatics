import React from 'react';
import Header from './app/head';
import Footer from './app/footer';
import './app/head.css';
import './app/footer.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ACarousel from './app/carousel';
import Reg from './app/reg';
import Technical from './app/technical';
import About from './app/about';
import Nontechnical from './app/non-technical';
import Culturals from './app/cultural';
import AdminLogin from './app/admin';

function App() {
  return (
    <>
 {/* <Form />
 <Property Karthika={Data} />
 <Blog/> */}
<BrowserRouter>     
      <Header />
        <Routes>
        <Route path='/' element={<ACarousel/>}/>
        <Route path='/home' element={<ACarousel/>}/>
        <Route path='/technical' element={<Technical/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/non-technical' element={<Nontechnical/>}/> 
        <Route path='/register' element={<Reg/>}/>
        <Route path='/culturals' element={<Culturals/>}/>
        <Route path='/admin' element={<AdminLogin/>}/>
        </Routes>
       <Footer />
</BrowserRouter>
 </>
  )
}

export default App
