import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Image from 'next/image'
import Button from '../components/Button'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Navbar } from '../components/Navbar'

export default function member() {
  const [email, setEmail] = useState("")

  const [alert, setAlert] = useState("")
  const [batch, setBatch] = useState("")


  const router = useRouter()
  const options = ["6-7AM", "7-8AM", "8-9AM", "5-6AM"];
  const onOptionChangeHandler = (event) => {
    setBatch(event.target.value)
    console.log("User Selected Value - ", event.target.value)
  }


  const handleSubmit = async () => {
    const validEmail = await ValidateEmail(email)

    if (!validEmail) return

    localStorage.setItem("userEmail", email)
    console.log(email, localStorage.getItem("userEmail"))
    router.push('/payment')

  }


  const ValidateEmail = async (mail) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (await mail.match(mailformat)) {
      return true;
    }
    setAlert("You have entered an invalid email address!");

    return false;
  }

  const batchChange = async () => {

    const validEmail = await ValidateEmail(email)

    if (!validEmail) return

    const memberPayload = {
      batch,
      email
    }
    // send data to the server
    console.log(memberPayload)
    try {
      const { data } = await axios({
        url: "/api/batchchange",
        method: "POST",
        data: memberPayload
      });

      console.log("Response", data)
      if (data._id == "2") {
        localStorage.setItem("successMessage", data.msg)
        router.push('/')
      }

      setAlert(data.msg)


      //setAlert(data.msg)



    } catch (error) {
      console.log("Error", error)
    }

  }

  return (
    <>
      <Navbar />
      <div className=" w-screen pt-20 overflow-y-scroll bg-orange-100 h-screen md:flex lg:flex items-center justify-center ">
        <div className=' lg:w-1/3  '>
          <div className=" items-center w-full  ">
            <p className='text-center'>{alert}</p>
          </div>
          <div className="space-y-5 m-5 flex flex-col">
            <label htmlFor="email">Email </label>
            <input
              value={email}
              className="border-2 border-black w-full p-2 "
              placeholder="Email"
              type="email"
              id="email"

              required
              onChange={({ target }) => setEmail(target.value)}
            />

          </div>

          <div className="space-y-5 m-5  ">
            <button
              onClick={handleSubmit}
              className=" w-full hover:bg-opacity-80 hover:text-lg bg-black text-white mt-10">
              <h1 className=" m-5">Fee Payment </h1>
            </button>
          </div>

          <div className=" space-y-5 m-5 flex flex-col">
            <label htmlFor="batch">Batch</label>

            <select
              className="border-2 border-black w-full p-2 "
              onChange={onOptionChangeHandler}>
              <option>Please choose one option</option>
              {options.map((option, index) => {
                return <option key={index} >
                  {option}
                </option>
              })}
            </select>

          </div>


          <div className="space-y-5 m-5  ">
            <button
              onClick={batchChange}
              className=" w-full hover:bg-opacity-80 hover:text-lg bg-black text-white mt-10">
              <h1 className=" m-5">Batch Change </h1>
            </button>
          </div>

        </div>
        <div className='  lg:w-1/3 md:w-1/2 px-5  '>
          <img 
            className='w-max'
            src='/yoga3.jpg'
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  )
}
