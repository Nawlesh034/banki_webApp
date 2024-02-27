import React from "react";
import styles,{layout} from '../style';
import Button from './Button';
import {card} from '../assets'

export default function CardDeal (){
    return(
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Find a better card deal <br className="sm:block hidden"/>
                    in few easy steps.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, odit quam ratione dolorum nulla quasi aliquam voluptates, porro aperiam blanditiis, delectus neque iure voluptatibus.</p>
                <Button styles="mt-10"/>
            </div>
            <div className={layout.sectionImg}>
                <img src={card} alt="card" className="w-[100%] h-[100%]" />
            </div>
        </section>
    )
}