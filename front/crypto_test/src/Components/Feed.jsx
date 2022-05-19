// import { json } from 'express'
import React, { useEffect, useState } from 'react'

const Feed = () => {
    const [postId,setPost] = useState('')
    const [value,setValue] = useState('')
    const [feedPost,setFeed] = useState()
    localStorage.setItem('postId', JSON.stringify(postId))
    const userId = JSON.parse(localStorage.getItem('userId'))
    console.log(value)
    const changer = (e)=>{
        e.preventDefault()
        setValue(e.target.value)
    }
    const sender = (e)=>{
        e.preventDefault()
        fetch('http://localhost:3002/tweet',{
            method:'POST',
            headers:new Headers({"content-type": "application/json"}),
            body:JSON.stringify({
                text:value,
                OwnerID:userId
            })
        }).then(result=>result.json())
        .then(json=>{
            console.log(json)
            setPost(json.postId)
        })
    }

    let posts;
    useEffect(()=>{
        fetch('http://localhost:3002/tweet')
        .then(result=>result.json())
        .then(response=>{
          console.log(response)
        })

    },[])
  return (
    <div>
        <div>
        <textarea name="post"  cols="30" rows="10" onChange={changer}></textarea>
        </div>
        <div>
            <button >Like</button>
            <button>Comment</button>
            <button>share</button>
        </div>
        <button type='submit' onClick={sender}>post</button>

    <div>
        {
            // feedPost.map(post=>{
            //     return(
            //         <li>{post}</li>
            //     )
            // })
        }
    </div>

    </div>
  )
}

export default Feed