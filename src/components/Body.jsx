
import React from 'react';

export default function Body(){
    const handlegithub=()=>{
        window.open("https://github.com/amoreX", "_blank");
    }
    const handleproject=()=>{
        window.open("https://projectportfolio-olive.vercel.app", "_blank");
    }
    return(
        <div id="page-1" className='w-screen h-screen flex justify-center items-center gap-3' style={{backgroundColor:"#EBE6D8"}}>
            <div id="right" className='w-2/4 h-4/5 flex flex-col gap-4'>
                <div id="header" className='text-5xl'>
                    ABOUT ME
                </div>

                <div id="text" className='text-2xl'>
                    Hello everyone, thank you for allowing me to introduce myself. My name is Nihal. I am pursuing CS at CMRIT, Bangalore.
                    I am efficient in a few technologies , you can check them out by clicking <span onClick={()=>handlegithub()} className='cursor-pointer border border-black hover:bg-black'>Me.</span>
                </div>
                <div id="text2" className='text-2xl'>
                    and , also Checkout the few projects I did in a fun interactive manner ;) by Clicking <span onClick={()=>handleproject()} className='cursor-pointer border border-black hover:bg-black ' >Me.</span>
                </div>
    
            </div>
        </div>
    )
}