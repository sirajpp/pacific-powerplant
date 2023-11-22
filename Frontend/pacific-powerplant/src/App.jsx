
import {Home,AboutUs,ContactUs,Products,Services,Navbar,Testimonials,Footer} from "./components";
import Signin from "./admin/Singin"

import "./index.css"

function App() {

  return (
   
  <>
    <div className="flex flex-col bck h-screen">
      <Navbar />
      <div className=" flex-grow  ">
        <Home />
        <AboutUs />
        <Products />
        <Services />
        {/* <Testimonials /> */}
        <ContactUs />
        <Signin />
        <Footer />
      </div>
    </div>

    
    </>
  )
}

export default App
