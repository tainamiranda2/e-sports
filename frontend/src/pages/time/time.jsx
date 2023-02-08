import { useState,useEffect } from 'react'
import axios from 'axios'

import { Input } from "../../components/input/input"

export const Time=()=>{
    const [name, setName]=useState('')
  
  async function createTodo(){
  
    const response = await axios.post("http://localhost:3333/time",{
      name:name
    })
 
   setName("")
  
  }
 

    return(
        <div>
            <h1>Cadastre um time </h1>
            <div className='form'>
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