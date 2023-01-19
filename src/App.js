import React from 'react';
// import About from './components/About/About';
// import Events from './components/Events/Events';
// import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
// import Gallery from './components/Gallery/Gallery';
// import Home from './components/Home/Home';
// import Startup from './components/Startup/Startup';
import Team from './components/Teams/Team';
import Testimonial from './components/Testimonials/Testimonial';
// import Wings from './components/Wings/Wing';
// import Footer from './components/Footer/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
import Contact from './components/Contact/Contact';
const App=()=> {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <>
        {/* <Home/>
        <About/>
        <Wings/>
        <Events/>
        <UpcomingEvents/>
        <Gallery/>
        <Startup/> */}
        <Testimonial/>
        <Team/>
         {/* <Contact/> */}
        {/* <Footer/>   */}
        </>
      }></Route>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
