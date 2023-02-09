import {useState,useEffect} from 'react'
import axios from 'axios'
import  './style.css'
import notfould from '../../img/not.png'
import jogador from '../../img/jogador.png'

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
            <h1>Veja todos os jogadores já cadastrados</h1>
      <p>E-Sposts é uma modalidade de sports de jogos online</p>
    <article>
    <section >

        {todos && todos.length ===0?(
          <>
        <p>Não foram encontrados nenhum jogador cadastrados</p>
        <img src={notfould}/>
        </>
        ):(
<>
<h2>Jogadores:</h2>
     {todos && todos.map((time)=>
     <>
  
          <div className='card-session'>
<img src={jogador}/>
<h3 key={time.id}>Nome - {time.name}</h3>
<p >idade - {time.idade}</p>
</div>
</>
      )}
</>
     )}

    </section>

    </article>
  
        </div>
    )
}