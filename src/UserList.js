import React from 'react'
import { useState,useEffect } from 'react'
import  axios  from 'axios'

const UserList = () => {
    const [listOfUser,setListOfUser] = useState([
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret"
        },{
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
        }
        ])
    useEffect(() => {
      const fetchData = () => {
          axios.get('https://jsonplaceholder.typicode.com/users')
          .then((res)=>setListOfUser(res.data))
          .catch(error=>console.log(error))
      }
      


      return () => {
        fetchData()
      }

    }, [])
    
  return (
    <div>
        {listOfUser.map((el)=>
            <div key={el.id}>
            <br/>
            <h3>Name : {el.name}</h3>
            <p>Username : {el.username}</p>
            <p>Email : {el.email}</p>
            <p>Phone : {el.phone}</p>
            <br/>
            </div>
            )}
    </div>
  )
}

export default UserList