import {useState,useEffect} from 'react'
import axios from 'axios'
import  './style.css'
export const Home=()=>{

    const  [todos, setTodos] =useState([])
  
  async function getTodos (){
    const response = await axios.get("http://localhost:3333/time")
  setTodos(response.data)
  }
  useEffect(()=>{
    getTodos()
  })
    return(
        <div>
            <h1>Veja todos os times e jogadores já cadastrados</h1>
      <p>E-Sposts é uma modalidade de sports de jogos online</p>
    
    <section className='card-session'>
    <h2>Times</h2>
        {todos.map((time)=>(
<h3 key={time.id}>{time.name}</h3>
        ))}
    
    </section>

  
        </div>
    )
}