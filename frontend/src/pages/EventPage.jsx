import React from 'react'
import Navbar from '../components/Navbar'
import Schedule from '../components/Schedule'
import Speakers from '../components/Speakers'
import Footer from '../components/Footer'
import Venue from '../components/Venue'
import Events from '../components/Events'

function EventPage() {
  return (
   <>
   {/* <Navbar/> */}
   <br />
   <br />
   <Events/>
   <Schedule/>
   <Speakers/>
  
   {/* <Footer/> */}
   </>
  )
}

export default EventPage