import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Image from 'next/image'
import Button from '../components/Button'
import axios from 'axios'
import { useRouter } from 'next/router'
import mongoose from 'mongoose'
import DropdownList from "react-widgets/DropdownList";
import { Navbar } from '../components/Navbar'


export default function enroll() {

  const [name, setName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [age, setAge] = useState("")
  const [alert, setAlert] = useState("")
  const [batch, setBatch] = useState("")
  const router = useRouter()
  const options = ["6-7AM", "7-8AM", "8-9AM", "5-6AM"];
  const onOptionChangeHandler = (event) => {
    setBatch(event.target.value)
    console.log("User Selected Value - ", event.target.value)
  }

const  ValidateEmail =async (mail)=> 
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(await mail.match(mailformat))
  {
  return true;
  }
  setAlert("You have entered an invalid email address!");
  
  return false;
}

  const handleSubmit = async () => {

   const validEmail= await  ValidateEmail (email)
   
   if(!validEmail)return
   

    const memberPayload = {
      name: firstName + " " + lastName,
      age,
      email,
      batch,
      number

    }
    console.log(memberPayload)
    // send data to the server
   

    try {
      const { data } = await axios({
        url: "/api/register",
        method: "POST",
        data: memberPayload
      });

      console.log("Response", data)
      if (data._id == "2") {
        localStorage.setItem("userEmail", email)
        router.push('/payment')
      }
      
      setAlert(data.msg)



    } catch (error) {
      console.log("Error", error)
    }

  }

  return (
    <>
      <Navbar />
      <div className=" w-screen pt-16 overflow-y-scroll  bg-orange-100 h-screen  lg:flex md:flex items-center justify-center ">
        <div className=' font-semibold text-lg md:w-2/3 lg:w-1/3 m-auto w-11/12 '>
          <div className=" items-center w-full  ">
            <p className='text-center'>{alert}</p>
          </div>

          <div className="md:inline-flex ld:inline-flex w-full">
            <div className=" space-y-5 m-5 lg:w-1/2 md:w-1/2  flex flex-col">
              <label htmlFor="first">First Name </label>
              <input
                value={firstName}
                className="border-2 border-black w-full p-2 "
                placeholder="First Name"
                type="text"
                id="first"

                required
                onChange={({ target }) => setFirstName(target.value)}
              />
            </div>

            <div className=" space-y-5 m-5 lg:w-1/2 md:w-1/2  flex flex-col">
              <label htmlFor="last">Last Name </label>
              <input
                value={lastName}
                className="border-2 border-black w-full p-2 "
                placeholder="Last Name"
                type="text"
                id="last"

                required
                onChange={({ target }) => setLastName(target.value)}
              />
            </div>
          </div>


          <div className="inline-flex w-full">
            <div className=" space-y-5 m-5 w-1/2 flex flex-col">
              <label htmlFor="age">Age </label>
              <input
                value={age}
                className="border-2 border-black w-full p-2 "
                placeholder="Age"
                type="age"
                id="age"

                //required 
                onChange={({ target }) => setAge(target?.value)}
              />
            </div>

            <div className=" space-y-5 m-5 w-1/2 flex flex-col">
              <label htmlFor="batch">Batch</label>

              <select
                className="border-2 default:text-slate-500 border-black w-full p-2 "
                onChange={onOptionChangeHandler}>
                <option disabled selected>Select your Batch</option>
                {options.map((option, index) => {
                  return <option key={index} >
                    {option}
                  </option>
                })}
              </select>


            </div>
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
              onChange={({ target }) => setEmail(target?.value)}
            />

          </div>

          <div className="space-y-5 m-5  ">
            <button
              onClick={handleSubmit}
              className=" w-full hover:bg-opacity-80 hover:text-lg bg-black text-white mt-10 ">
              <h1 className=" m-5">Proceed </h1>
            </button>
          </div>
        </div>
        <div className=' lg:w-1/2 md:w-max w-2/3 justify-center m-auto'>
          <img 
            className='lg:w-11/12 md:w-11/12 w-full'
            src='/MaryTilson_1.jpg'
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  )
}
