import styles from './style'
import {
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer
} from './components'
import Hero2 from './components/Hero2'
import Booking from './components/Booking'
import Hero3 from './components/Hero3'
import Navbar2 from './components/Navbar2'
import Navbar3 from './components/Navbar3'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Waiver from './components/Waiver'
import Footer2 from './components/Footer2'
import Error from './components/Error'
import Contact from './components/Contact'
import Booking2 from './components/Booking2'

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <BrowserRouter>
      <Navbar2 />
      <div>
        <Routes className='flex-grow'>
          <Route path='/' index element={<Hero2 />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/booking2' element={<Booking2 />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newStuff' element={<Navbar2 />} />
          <Route path='/waiver' element={<Billing />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <div
        className={`bg-primary ${styles.paddingX} ${styles.flexStart} sticky top-[100vh] bottom-0`}
      >
        <div className={`${styles.boxWidth}`}>
          <Footer2 />
        </div>
      </div>
    </BrowserRouter>
  </div>
)

export default App
