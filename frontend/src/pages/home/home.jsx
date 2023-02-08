import {useState,useEffect} from 'react'
import axios from 'axios'
import  './style.css'
export const Home=()=>{

    const  [todos, setTodos] =useState([])
  
  async function getTodos (){
    const response = await axios.get("http://localhost:3333/jogador")
  setTodos(response.data)
  }
  useEffect(()=>{
    getTodos()
  })
    return(
        <div>
            <h1>Veja todos os times e jogadores já cadastrados</h1>
      <p>E-Sposts é uma modalidade de sports de jogos online</p>
    <article>
    <section >
    <h2>Jogadores:</h2>
        {todos.map((time)=>(
          <div className='card-session'>
<h3 key={time.id}>Nome- {time.name}</h3>
<p >idade - {time.idade}</p>
<span >Time - {time.time_id}</span>
</div>
        ))}

    </section>

    </article>
  
        </div>
    )
}