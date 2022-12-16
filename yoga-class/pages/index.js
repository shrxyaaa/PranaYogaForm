import Head from 'next/head'
import Button from '../components/Button'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function Home() {
 // const router = useRouter();
  const [alert, setAlert] = useState("")

  useEffect(() => {
    const message = localStorage.getItem("successMessage")
    
    if (message) {
    setAlert(message+"!")
    setTimeout
    (() => {setAlert("")}, 3000)
    }
    localStorage.clear()

  }, [])

  return (
<><div className="font-bold float-right   fixed w-full px-8 py-6 flow-root">
        <Link href="/about">
        <p className="float-right ">About</p>
        </Link>
    </div>
    <div className=" w-screen  bg-scroll  h-screen flex flex-col justify-center ">
      <img className='-z-50 object-cover absolute top-0 left-0 w-screen h-screen' src="/theme.jpg" alt='/public/yogaclass.jpg' />
      <div className="font-bold float-right   fixed w-full px-8 py-6 flow-root">
        
    </div>
      <div className='w-max p-10 bg-black backdrop:blur-3xl bg-opacity-80  h-screen'>
        <div className='h-2/6 m-auto'>
           

          <Link href="/">
            <p className="float-left text-white font-tangerine text-8xl">Pranayam</p>
          </Link>
        </div>

        <div className=" h-4/6 m-auto  justify-center align-middle space-y-14">
        <div
              //  onClick={handleSubmit}
              className=" px-8 pb-8 w-max m-auto text-lg text-white  tracking-wider ">

              <h1 className=" mx-auto my-5">{alert}</h1>
            </div>
          <Link href="/enroll">

            <button
              //  onClick={handleSubmit}
              className=" px-8 py-2 border-2  border-yellow-600 text-white  transition-all hover:tracking-wider hover:text-yellow-600  ">

              <h1 className=" m-5">Join Our Community </h1>
            </button>
          </Link>
          <div> </div>
          <Link href="/member">
            <button
              //  onClick={handleSubmit}
              className="px-8 py-2 border-2  border-yellow-600 text-white  transition-all hover:tracking-wider hover:text-yellow-600   ">
              <h1 className=" m-5">Already a Member? </h1>
            </button>
          </Link>
        </div>
      </div>
    </div>

    </>

  )
}
