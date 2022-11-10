import React from 'react'
import { useState } from 'react'
import {AiFillEyeInvisible , AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import OAuth from './components/OAuth'
import { useNavigate } from 'react-router-dom'
import {getAuth , createUserWithEmailAndPassword , updateProfile} from 'firebase/auth'
import {db} from '../FireBase'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import {toast} from 'react-toastify'

export default function SignUp() {
    const [showPassword ,setShowPassword] = useState(false)
    const [formData , SetFormData] =useState({
        name: '',
        email: '',
        password: '',
    })
    const { name , email , password} = formData
    const navigate = useNavigate()
    function onChange (e){
        SetFormData((prevState)=>({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }
     async function onSubmit(e){
        e.preventDefault()

        try {
            const auth = getAuth()
            const userCredential= await createUserWithEmailAndPassword(auth,email,password)
            updateProfile(auth.currentUser, {
                displayName: name,
              });
            const user = userCredential.user
            const formDataCopy = {...formData}
            delete formDataCopy.password
            formDataCopy.timestamp = serverTimestamp()

            await setDoc(doc(db,'users', user.uid),formDataCopy)
            toast.success('sing up success')
            navigate('/')
        } catch (error) {
           toast.error('somting missing')
        }
    }
  return (
    <section>
        <h1 className='text-3xl text-center mt-6 font-bold'>sign Up</h1>
        <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
            <img className='w-full rounded-2xl' src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" alt="key" />
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
            <form  onSubmit={onSubmit}>
            <input 
                className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' 
                type="text" 
                id='name' 
                value={name} 
                onChange={onChange} 
                placeholder='full name' />
                <input 
                className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' 
                type="email" 
                id='email' 
                value={email} 
                onChange={onChange} 
                placeholder='emai address' />
                <div className='relative mb-6'>
                <input 
                className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' 
                type={showPassword ? 'text' : 'password'}
                id='password' 
                value={password} 
                onChange={onChange} 
                placeholder='password' />
                {showPassword ? <AiFillEyeInvisible 
                className='absolute right-3 top-3 text-xl cursor-pointer'
                onClick={()=>setShowPassword((prevState)=> !prevState)}
                /> 
                : 
                <AiFillEye 
                className='absolute right-3 top-3 text-xl cursor-pointer'
                onClick={()=>setShowPassword((prevState)=> !prevState)}
                />}
                </div>
                <div className='flex justify-between whiteespace-nowrap text-sm sm:text-lg'>
                  <p className='mb-6'>Have account?
                   <Link to='/sing-in' className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'>Sing in</Link>
                  </p>
                  <p>
                  <Link to='/forgot-password' className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'>forgot password?</Link>
                  </p>
                </div>
                <button type='submit' className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transitoin duration-150 esse-in-out hover:shadow-lg active:bg-blue-800'>
                sign Up
            </button>
            <div className='flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
                <p className='text-center font-semibold mx-4'>Or</p>
            </div>
            <OAuth/>
            </form>
        </div>
        </div>
    </section>
  )
}