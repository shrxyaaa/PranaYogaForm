import Head from 'next/head'
import Button from '../components/Button'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';
import profilePic from '../public/yogq1.jpg'
import { Navbar } from '../components/Navbar';

export default function Home() {
    const router = useRouter();


    return (
        <>
            <Navbar className="text-black" />
            <div className=" w-screen overflow-y-scroll scroll-top-24   h-screen flex flex-col justify-center ">
                <img className='-z-50 object-cover absolute top-0 left-0 w-screen h-screen' src="/theme.jpg" />

                <div className=' w-9/12 m-24 md:w-1/2 lg:w-2/5  text-white text-lg  p-5  bg-black backdrop:blur-3xl bg-opacity-80  '>
                    <h1 className='font-courgette text-center my-5 text-yellow-600'>“The body is your temple.<br /> Keep it pure and clean for the soul to reside in.”</h1>

                    <p className='font-slabo'>
                        At Pranyama, we strive to help people create within themselves a center, a resolute and permanent center, a still point in the turning world. This then serves as the source for mental and physical fitness and joyous living. Our courses are specifically designed for various age-groups and address diverse challenges such as work-life balance, reducing stress and anxiety, treating insomnia, improving focus, concentration and productivity.
                    </p>

                    <h1 className='font-archivo mt-10' >Batch Timings :</h1>
                    <div className='w-full flex'>
                    <ul className='w-1/2 font-archivo'>
                        <li>6-7  AM</li>
                        <li>7-8  AM</li>
                        <li>8-9  AM</li>
                        <li>5-6  AM</li>
                    </ul>
                     <div className='w-1/2 '>
                    <Link href="/">

                        <button
                          
                            className=" py-1 mt-20 bottom-0 px-4 float-right border-2  border-yellow-600 text-white  transition-all hover:tracking-wider hover:text-yellow-600  ">
                            <h1 >Back</h1>
                        </button>
                    </Link>
                    </div>

                    </div>

                </div>
            </div>

        </>


    )
}
