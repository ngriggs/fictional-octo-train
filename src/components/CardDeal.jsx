import {card} from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

const CardDeal = () => (
  <section id="party" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/> in a few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin, enim nec sagittis iaculis, leo enim tristique ex, vitae convallis sem ligula vitae risus. </p>
      <Button styles="mt-10" /> 
    </div> 

    <div className={layout.sectionImg}>
    <img src={card} alt="card" className="w-[100%] h-[100%]"/>  
    </div>

    
  </section>
)

export default CardDeal