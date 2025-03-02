'use client'

import { createUser, logIn } from '@/utils/dataControllers/usersController';
import { useConnection } from '@/utils/hooks/useConnection';
import Form from 'next/form'
import { useState } from 'react';

const Connection = () => {

    const [connect, setConnect] = useState(false)
    const connection = useConnection((state) => state.connection)

    const handleChangeForm = () => {
        setConnect(!connect)
    }

    return (
        <div className={`${connection ? '' : 'hidden'} absolute top-40 border-4 p-2 rounded-xl overflow-hidden backdrop-blur-lg gap-4 flex flex-col justify-center items-center`}>
            <button
                onClick={handleChangeForm}
                className='flex justify-between my-2 gap-2 text-xl'
            >
                <p className={`${connect ? "" : "bg-gray-800"} px-4 py-1 rounded-full`}>Sign In</p>
                <p className={`${connect ? "bg-gray-800" : ""} px-4 py-1 rounded-full`}>Log In</p>
            </button>
            <Form action={connect ? createUser : logIn} className='flex flex-col justify-center items-center gap-8 py-2'>
                <div className='flex flex-col justify-between px-2 gap-4'>
                    <input
                        type="text"
                        name='name'
                        autoComplete='username'
                        placeholder='Username'
                        className='rounded-full px-2 text-gray-800'
                        />
                    <input
                        type="text"
                        name='password'
                        autoComplete='off'
                        placeholder='Password'
                        className='rounded-full px-2 text-gray-800'
                        />
                </div>
                <button type='submit' className='flex w-2/3 bg-gray-800 rounded-full justify-center text-2xl'>Submit</button>
            </Form>
        </div>
    );
}

export default Connection;