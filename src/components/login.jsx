import React from 'react'
import loginImg from '../assets/login.jpg'
import logo from '../assets/logo.png'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'

export default function login() {
    return (
        <div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='bg-white w-300 flex flex-col justify-center'>
                <div>
                    <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                        <h1 className='text-center text-sm'>WELCOME BACK!</h1>
                        <h2 className='text-center text-xl p-3'> Log In to your Account! </h2>
                        <div className='flex items-center justify-center'>
                            <button><img className='w-20 object-cover py-5' src={logo} alt="logo" /></button>
                            <button className='text-4xl font-bold text-center py-6 font-oleo'>DAAN.</button>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Username</label>
                            <input className='border p-2 bg-slate-100 text-black' type="text" placeholder="JoeSmith"/>
                        </div>
                        <div className='flex flex-col py-2' >
                            <label>Password</label>
                            <input className='border p-2 bg-slate-100 ' type="password" placeholder="**********" />
                        </div>
                        <button className='border w-full my-5 py-2 bg-[#0B7D5D] hover:bg-[#045840] text-white'>Sign In</button>
                        <div className='flex justify-between'>
                            <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                            <button>Create an account</button>
                        </div>
                        <h1 className='text-center text-sm p-3 text-slate-600'>-------------------or--------------------</h1>
                        <div className='flex justify-between py-6'>
                            <button className='border shadow-lg hover:shadow-xl  px-6 py-2 relative flex items-center' ><AiFillFacebook className='mr-2' /> Facebook </button>
                            <button className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center '><FcGoogle className='mr-2' /> Google</button>
                        </div>

                    </form>
                </div>
            </div>

            <div className='hidden sm:block flex-col justify-center'>
                <img className='w-100 h-full object-cover' src={loginImg} alt="" />

            </div>
        </div>
        </div>
      )
}
