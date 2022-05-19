import { set } from 'mongoose'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
 const [firstInput,setFirst] = useState('')
 const [textArea,setText] = useState('')
 const [secInput,setSec] = useState('')
 const [ids,setId] = useState('')
 const Navigate = useNavigate()
 console.log(ids)
 const changer =(e)=>{
    e.preventDefault()
    setFirst(e.target.value)
    console.log(firstInput,'Iam the first')
 }
 const changerText =(e)=>{
    e.preventDefault()
    setText(e.target.value)
    console.log(textArea,'Iam the textArea')
 }
 const changer1 =(e)=>{
    e.preventDefault()
    setSec(e.target.value)
    console.log(secInput,'Iam the Second input')
 }
 

 const sender =(e)=>{
     e.preventDefault()
     fetch('http://localhost:3002/user',{
         method:'POST',
         headers:new Headers({"content-type":"application/json"}),
         body: JSON.stringify({
             userName:firstInput,
             aboutMe:textArea,
             picture:secInput
            })
        }).then(result=>result.json())
        .then(json=>{
            console.log(json.id)
            localStorage.setItem('user_id',JSON.stringify(json.id))
            setId(json.id)
        })
        Navigate('/feed')
 }
  return (
    <div>
        <form action="" >
            <div>
                <input type="name" placeholder='name' className='inputClass' onChange={changer}/>
            </div>
            <div>
                <textarea name="bio" cols="30" rows="10" placeholder='about me' onChange={changerText}></textarea>
            </div>
            <div>
                <input type="text" placeholder='something'  className='inputClass' onChange={changer1}/>
            </div>
            <button type='submit' onClick={sender}>Submit</button>
        </form>
    </div>
  )
}

export default Login