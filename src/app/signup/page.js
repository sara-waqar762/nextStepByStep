/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useState } from 'react'

const page = () => {
    const [id, setId] = useState('');
    const [name, setname] = useState('');
    const [age, setage] = useState('');
    const [email, setemail] = useState('');
    const signup = async () => {
        let data = await fetch('http://localhost:3000/user', {
            method: 'POST',
            body: JSON.stringify({ id, name, age, email })
        })
        data = await data.json()
        return data

    }

    return (
        <>
            <h1>Sign up</h1>
            <input type='text' placeholder='Enter your id' onChange={(e) => setId(e.target.value)} value={id} />
            <input type='text' placeholder='Enter your name' onChange={(e) => setname(e.target.value)} value={name} />
            <input type='text' placeholder='Enter your age' onChange={(e) => setage(e.target.value)} value={age} />
            <input type='text' placeholder='Enter your email address' onChange={(e) => setemail(e.target.value)} value={email} />
            <button type='submit' onClick={signup}>Sign up</button>

        </>
    )
}

export default page