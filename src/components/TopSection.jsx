'use client'
import { Playfair_Display } from "next/font/google"; 
import ArticleLogoSvg from "./ArticleLogoSvg";
import { Slide } from "react-awesome-reveal";

const PfDisplay = Playfair_Display({
    weight: '400',
    subsets: ['latin'],
})

const TopSection = () => {
    return ( 
        <main className="w-full md:h-2/5 h-1/4 sticky top-0 z-10 ">
            <div className="sticky top-0 h-screen">
                <div className='flex md:flex-row flex-col'>
                    <section className='md:w-3/4 w-full md:order-1 md:mt-0 mt-10'>
                        <Slide>
                            <ArticleLogoSvg/>
                        </Slide>
                    </section>
                    <section className='flex flex-col md:w-1/3 w-full md:border-l-[.5px] md:border-t-gray-100 md:ml-20 md:order-2 -order-1'>
                        <Slide direction="right" className="text-center transition-all duration-300 self-end w-1/4 bg-slate-400 hover:bg-slate-200 text-sm py-1.5 rounded-2xl text-slate-950">
                            <button>
                                    Get In Touch
                            </button>
                        </Slide>
                        <Slide direction="up" className='md:self-center mt-auto md:text-4xl text-xl'>
                            <p className={`${PfDisplay.className}`}>
                                Brand and Digital for <br/>
                                Culture, Commerce <br/>
                                and Good.
                            </p>
                        </Slide>
                    </section>
                </div>
            </div>
      </main>
    );
}
 
export default TopSection;