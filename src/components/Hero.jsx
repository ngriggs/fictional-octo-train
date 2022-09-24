import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <p className={`${styles.paragraph} ml-2`}>
          WeOrbit is an indoor play space dedicated to providing a strong
          foundation for early learning through active play, educational
          activities and engaging classes for both parents and children. Explore
          our space and create amazing family memories!
        </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px]  ss:leading-[100px] leading-[75px]'>
          The Next <br className='sm:block hidden' />{' '}
          <span className='text-gradient'>Generation</span>{' '}
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>

      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px]  ss:leading-[100px] leading-[75px] w-full'>
        Payment Method.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
        tristique diam. Aenean ultrices eleifend neque, ac interdum nunc
        consequat sit amet. Vestibulum ultrices lacus ut purus tristique
        vulputate. Vestibulum pharetra nec risus at ullamcorper. Nam nec euismod
        arcu, et dapibus elit. Nam ut sapien et enim eleifend pharetra eu quis
        diam. Aenean vitae sem vel ligula sagittis sodales. Proin ac ultrices
        tellus. Aliquam erat volutpat. Suspendisse varius enim at dolor vehicula
        pellentesque.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt='billing' className='w-[100%] h-[100%] relative' />
      <div className='absolute w-[40%] h-[35%] top-0 pink__gradient'></div>
      <div className='absolute w-[80%] h-[80%] rounded-full bottom-40 white__gradient'></div>
      <div className='absolute w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
)

export default Hero
