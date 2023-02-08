import { useState,useEffect } from 'react'
import axios from 'axios'

import { Input } from "../../components/input/input"

export const Time=()=>{
    const [name, setName]=useState('')
    const  [todos, setTodos] =useState([])
  
  async function getTodos (){
    const response = await axios.get("http://localhost:3333/time")
  setTodos(response.data)
  }

  async function createTodo(){
  
    const response = await axios.post("http://localhost:3333/time",{
      name:name
    })
 
   setName("")
  
  }
 
  useEffect(()=>{
    getTodos()
  })
    return(
        <div>
         <h3>Times criados</h3>
           <div className='card-session'>
           <h2>Times:</h2>
        {todos.map((time)=>(
          
<h3 key={time.id}>{time.name}</h3>

        ))}
        </div>
          

            <div className='form'>
            <h3>Cadastre um time </h3>
                <Input type="text"
            text="Nome do time"
                placeholder="Informe o nome do time"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <button onClick={createTodo}>Enviar</button>
            </div>

        </div>
    )
}