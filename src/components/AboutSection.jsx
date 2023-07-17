'use client'
import { Playfair_Display } from "next/font/google"; 
import { Fade } from "react-awesome-reveal";
import ArticleLogo from "./ArticleLogo";

const PfDisplay = Playfair_Display({
    weight: '400',
    subsets: ['latin'],
})

const AboutSection = () => {
    return ( 
        <div className="flex flex-col md:flex-row justify-between p-5 md:p-0 gap-5 md:gap-0">
              <div className='w-1/4 md:block hidden'>
                <Fade>
                  <ArticleLogo color={"#FFFFFF"}/>
                </Fade>
              </div>
              <div className='md:w-1/4 w-full md:border-l-[.5px] md:border-slate-200 md:pl-5 md:pr-5'>
                <Fade cascade damping={2e-1}>
                    <p className= {`md:text-4xl text-2xl ${PfDisplay.className}`}> We envision the digital experience from the top down.</p> <br/>
                    <p className='md:text-base text-sm'>Our services build better brands holistically across design, development and strategy. We work closely with clients from start to finish, exploring their new endeavors and reimagining existing ones.</p>  
                </Fade>
              </div>
              <div className='md:w-1/4 w-full md:border-l-[.5px] md:border-slate-200 md:pl-5 md:pr-5'>
                <Fade cascade damping={2e-1}>
                    <span className={`md:text-4xl text-2xl ${PfDisplay.className}`}>Clients </span><br/>
                    <ul class="list-none md:text-base text-sm">
                      <li>Archewell</li>
                      <li>Camila Coelho</li>
                      <li>Canopy Growth</li>
                      <li>Coveteur</li>
                      <li>Diane Von Furstenberg</li>
                      <li>The Duke & Duchess of Sussex</li>
                      <li>Gee Beauty</li>
                      <li>Hypebeast</li>
                      <li>Joe Fresh</li>
                      <li>Ms. Lauryn Hill</li>
                      <li>NBA</li>
                      <li>The Newsette</li>
                      <li>Pousaz Philanthropies</li>
                      <li>The Tig</li>
                      <li>Travalyst</li>
                    </ul>  
                </Fade>
              </div>
              <div className='md:w-1/4 w-full md:border-l-[.5px] md:border-slate-200 md:pl-5 md:pr-5'>
                <Fade cascade damping={2e-1}>
                    <span className={`md:text-4xl text-2xl ${PfDisplay.className}`}>Services</span><br/>
                    <ul class="list-none md:text-base text-sm">
                      <li>Brand</li>
                      <li>Digital</li>
                    </ul> 
                </Fade>
              </div>
            </div>
     );
}
 
export default AboutSection;