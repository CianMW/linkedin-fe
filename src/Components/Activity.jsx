import {useState, useEffect} from 'react'
import {token, me} from '../lib'
import dotenv from "dotenv/config"


const Activity = ({ user }) => {
    
    const [post, setPost] = useState([])

    const fetchPost = async() => {
        try{
            const response = await fetch(process.env.REACT_APP_URL + `posts/${user._id} `,{
                headers: {
                  Authorization:token,
                },
              });
            if(response.ok){
               let ourPost = await response.json();
                console.log(`this is our post`, ourPost)
                setPost(ourPost)
            }

        } catch(e){
            console.error(e);
        }
    }
    console.log(post)
    
    useEffect(() => {
        fetchPost();
    },[])

   const filteredPost = post.filter(post => post === me.toLocaleLowerCase())

    return (
        <>
        <div>
        {/* <h1>Loading....</h1> */}
            {
            filteredPost.map(post => (
                <p>{post.text}</p>
            ))
            }
        </div>
        </>
    )
}

export default Activity