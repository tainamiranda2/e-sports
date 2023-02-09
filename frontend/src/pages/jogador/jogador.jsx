import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react'
import { Input } from "../../components/input/input"
import axios from 'axios'

export const Jogador=()=>{
  const {id}=useParams()
  const  [todos, setTodos] =useState([])

    const [name, setName]=useState('')
    const  [time_id, setTime_id] =useState('')

    const  [idade, setIdade] =useState('')

    async function getTodos (){
      const response = await axios.get("http://localhost:3333/jogador")
    setTodos(response.data)
    
    }
    

  async function createJogador(){
    atualizardado()
    let mudarTime_id=parseInt(time_id)
    let mudarIdade=parseInt(idade)

    const response = await axios.post("http://localhost:3333/jogador",{
      name:name,
      idade:mudarIdade,
      time_id:mudarTime_id
    })
 alert("Cadastrado com sucesso.")

  }
 
//verificados ido dos jogadores
let testeJogador=todos.map((ver)=>(
  ver.time_id
))

//filtrandos o time_id do jogadores igual ao id do time
  let idJogador=testeJogador.filter(idTime=>idTime==id)

 // console.log("id do time igual do jogador", idJogador)
 const atualizardado=()=>{
  setTime_id(id)
  
  }
if(idJogador.length>=5){
alert("Grupo cheio, aqui para voltar")
window.history.back()
}



  useEffect(()=>{
    getTodos()
    
  },[])

    return(
        <div>
            <h1>Cadastre um jogador para seu time </h1>
            <div className='form'>
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
    )
}