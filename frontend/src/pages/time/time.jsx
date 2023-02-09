import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import { Input } from "../../components/input/input"
import notfould from '../../img/not.png'
import jogo from '../../img/jogo.png'

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
     
          
         {todos && todos.length ===0?(
          <>
                <p>Não foram encontrados nenhum time cadastrados</p>
<img src={notfould}/>
</>
        ):(
          <>
          <h2>Estes times estão cadastrados</h2>
          {todos.map((time)=>(
           <>
          
             <div className='card-session'>
  <h3 key={time.id}>{time.name}</h3>
  <img src={jogo}/>
  <br/>
  <Link to={`/jogador/${time.id}`}>Cadastrar-se nesse time</Link>
  </div>
  </>

        ))}
        </>
     ) }
          
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