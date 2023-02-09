import React, { useRef, useState } from 'react'
import './User.css'

function User(){
    const user =[
        {
            id: "1",
            first_name: "John",
            last_name: "leader",
            email: "test@gmail.com"
        }
    ]

    const [users, setUser] = useState(user)
  return (
    <div className='crud'>
        <div>

        
        <AddUser setUser = {setUser}/>
        <table>
            {
                users.map((current) =>(
                    <tr>
                            <td>{current.first_name}</td>
                            <td>{current.last_name}</td>
                            <td>{current.email}</td>
                            <td>
                                <button className='edit'>Edit</button>
                                <button className='delete'>Delete</button>
                            </td>
                    </tr>
                ))
            }
        </table>
        </div>
    </div>
  )

}
 function AddUser({setUser}){
    const first_nameRef =useRef()
    const last_nameRef =useRef()
    const emailRef =useRef()
    function handleSubmit(event){
        const first_name = event.target.elements.first_name.value;
        const last_name = event.target.elements.last_name.value;
        const email = event.target.elements.email.value;
        const newuser ={
            id: 3,
            first_name,
            last_name,
            email
        }
        setUser((prevUser)=>{
            return prevUser.concat(newuser)
        })
        first_nameRef.current.value = ""
        last_nameRef.current.value = ""
        emailRef.current.value = ""

        
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="first_name" placeholder="enter your Firstname" ref={first_nameRef}/>
            <input type="text" name="last_name" placeholder="enter your Lastname" ref={last_nameRef}/>
            <input type="text" name="email" placeholder="enter your mail" ref={emailRef}/>
            <button type='submit'>add</button>

        </form>
    )
 }


export default User