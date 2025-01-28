import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import History from '../components/History'
import Services from '../components/Services'
import Streamline from '../components/Streamline'
import Expertise from '../components/Expertise'
import Support from '../components/Support'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className='w-full'>
        <NavBar/>
        <Hero/>
        <History/>
        <Services/>
        <Streamline/>
        <Expertise/>
        <Support/>
        <Footer/>
    </div>
  )
}

export default LandingPage