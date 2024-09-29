// import {useState} from 'react'
import { useState } from 'react';
import Button from '../components/Button.jsx'
import axios from '../api/axios.js';
import Input from '../components/Input.jsx';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false) 

    const handleSubmit = async(e) =>{
      e.preventDefault();
      setIsLoading(true)
      try{
            await axios.post('/v1/users/register',{
            fullname: fullname,
            email : email,
            password: password
          })
      }
      catch(error){
        console.log(error)
      }finally{
        setIsLoading(false)
      }
    }

    

  return (
    <div className='lg:p-36 py-20 '>
        <section className='flex items-center justify-center flex-col px-2 font-bold text-4xl'>
            <h1>Sign-Up</h1>
        </section>
        <form className='m-10'>
            <div className='flex flex-col gap-6 justify-center items-center'> 
                <Input 
                    placeholder='Full Name'
                    onChange={(e)=>setFullname(e.target.value)}
                    value={fullname}
                    disabled={isLoading}
                />
                <Input 
                    placeholder='Email'
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    disabled={isLoading}
                />
                <Input 
                    placeholder='Password'
                    type='password'
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    disabled={isLoading}
                />
            <Button label='Register' onClick={handleSubmit}/> 
                <div className='text-slate-500 text-center'>
                  <p>Already have an Account?</p>
                      <span
                          className='
                          cursor-pointer
                          hover:underline text-purple-800
                          '
                      ><Link to="/login">Sign In</Link></span>
                </div>
            </div>
        </form> 
    </div>
  )
}

export default Signup
