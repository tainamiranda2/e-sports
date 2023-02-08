import {useState,useEffect} from 'react'
import { Input } from "../../components/input/input"
import axios from 'axios'
export const Jogador=()=>{
  const  [todos, setTodos] =useState([])
    const [name, setName]=useState('')
   
    const  [time_id, setTime_id] =useState('')
    const  [idade, setIdade] =useState('')

    async function getTodos (){
      const response = await axios.get("http://localhost:3333/time")
    setTodos(response.data)
    }
     


  async function createJogador(){
  
    const response = await axios.post("http://localhost:3333/jogador",{
      name:name
    })
 
   setName("")
  
  }
  useEffect(()=>{
    getTodos()
  })

    return(
        <div>
            <h1>Cadastre um jogador para seu time </h1>
            <div className='form'>
                <Input type="text"
            text="Nome do jogador"
                placeholder="Informe o nome do jogador"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <Input type="number"
            text="Idade do jogador"
                placeholder="Informe a idade"
                value={idade}
                onChange={(e)=>setName(e.target.value)}
                />
                <br/>
                <select
                placeholder="Informe o nome do time"
                value={time_id}
                onChange={(e)=>setTime_id(e.target.value)}
                >
{todos.map((option)=>(
  <option  key={option.id}>{option.name}</option>
))}
                

                  </select>


                <button onClick={createJogador}>Enviar</button>
            </div>
        </div>
    )
}