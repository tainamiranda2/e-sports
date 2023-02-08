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
   // console.log("oi",name, idade, time_id)
  //  console.log(typeof(time_id))
    let mudarTime_id=parseInt(time_id)
    let mudarIdade=parseInt(idade)
   // console.log(typeof(mudar))

    const response = await axios.post("http://localhost:3333/jogador",{
      name:name,
      idade:mudarIdade,
      time_id:mudarTime_id
    })
 
  }
  let idJogador=[]
  let idTime=[]
let timeslibrados=[]

let teste=todos.map((teste1)=>{
 return teste1
})
  //console.log("id do jogador",) 

  console.log("id do time ", teste)

  useEffect(()=>{
    getTodos()
  })

    return(
        <div>
            <h1>Cadastre um jogador para seu time </h1>
            <div className='form'>
            <div className=''
              
                >
                   <select type="button"  
    placeholder="Informe o nome do time"
  name={time_id}
   onChange={(e)=>setTime_id(e.target.value)}
   >
{todos.map((option)=>(
  <>
  
  <option value={option.id} key={option.id}>{option.name}</option>
 
   
   </>
))}
</select>
                <Input type="text"
            text="Nome do jogador"
                placeholder="Informe o nome do jogador"
                value={name}
                name={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <Input type="number"
            text="Idade do jogador"
                placeholder="Informe a idade"
                value={idade}
                name={idade}
                onChange={(e)=>setIdade(e.target.value)}
                />
                <br/>
 
                  </div>

                <button onClick={createJogador}>Enviar</button>
            </div>
        </div>
    )
}