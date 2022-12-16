import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Image from 'next/image'
import Button from '../components/Button'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Navbar } from '../components/Navbar'

export default function payment() {


  const [amount, setAmount] = useState("")
  const [alert, setAlert] = useState("")
  const router = useRouter()
  const handleSubmit = async () => {

    const email = localStorage.getItem("userEmail")
    const memberPayload = {
      amount,
      email
    }
    console.log(memberPayload)
    // send data to the server
    try {
      const { data } = await axios({
        url: "/api/payment",
        method: "POST",
        data: memberPayload
      });

      console.log("Response", data)
      if (data._id == "2") {
        if(!localStorage.getItem("successMessage"))
        localStorage.setItem("successMessage", data.msg)
        router.push('/')
      }
      
      setAlert(data.msg)




    } catch (error) {
      console.log("Error", error)
    }

  }

  return (
    <>
      <Navbar />
      <div className=" w-screen pt-16 overflow-y-scroll bg-orange-100 h-screen md:flex lg:flex items-center justify-center ">
        <div className=' md:w-2/3 lg:w-1/3 w-full   '>
        <div className=" items-center w-full  ">
            <p className='text-center'>{alert}</p>
          </div>

          <div className=" space-y-5 m-5 flex flex-col">
            <label htmlFor="amount">Amount (in Rupees) </label>
            <input
              value={amount}
              className="border-2 border-black w-full p-2 "
              placeholder="Amount"
              type="text"
              id="amount"

              required
              onChange={({ target }) => setAmount(target?.value)}
            />
          </div>


          <div className="space-y-5 m-5  ">
            <button
              onClick={handleSubmit}
              className=" w-full hover:bg-opacity-80 hover:text-lg bg-black text-white mt-10">
              <h1 className=" m-5">Proceed </h1>
            </button>
          </div>
        </div>
        
        <div className='  lg:w-2/5 md:w-1/2 px-5  '>
          <img 
            className='w-max'
            src='/yogq1.jpg'
            alt="Picture of the author"
          />
        </div>

      </div>
    </>
  )
}
