import React from "react";
import styles from "./style";
import {  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonial,
  Hero,} from "./Components"

export default function App(){
  return(
    <>
    <div className="bg-primary w-full overflow-hidden text-white">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
         <Navbar/>
        </div>
      </div>
      <div className={`bg-primary  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Billing/>
          <Stats/>
          <Business/>
          <CardDeal/>
          <Testimonial/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>
      
     
      
    </div>
    </>
  )
}