'use client'

import { Slide } from "react-awesome-reveal";

const HeroVideo = () => {
    return ( 
        <div className="w-full h-screen flex items-center justify-center">
            <Slide>
                <video className="w-full md:h-full h-[70vh] object-cover rounded-3xl" autoPlay muted loop>
                    <source src={'/video/about.mp4'} />
                </video>
            </Slide>
        </div>
    );
}
 
export default HeroVideo;