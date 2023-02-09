import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react'
import { Input } from "../../components/input/input"
import axios from 'axios'

export const Jogador=()=>{
  const {id}=useParams()
  const  [todos, setTodos] =useState([])

    const [name, setName]=useState('')
    const  [time_id] =useState(id)

    const  [idade, setIdade] =useState('')

    async function getTodos (){
      const response = await axios.get("http://localhost:3333/jogador")
    setTodos(response.data)
    
    }
    

  async function createJogador(){

 
    let mudarIdade=parseInt(idade)
let mudarId=parseInt(time_id)
    const response = await axios.post("http://localhost:3333/jogador",{
      name:name,
      idade:mudarIdade,
      time_id: mudarId
    })
 alert("Cadastrado com sucesso.")
setIdade("")
setName("")
  }

//verificados ido dos jogadores
let testeJogador=todos.map((ver)=>(
  ver.time_id
))

//filtrandos o time_id do jogadores igual ao id do time
  let idJogador=testeJogador.filter(idTime=>idTime==id)

 // console.log("id do time igual do jogador", idJogador)
 
if(idJogador.length>=5){
alert("Grupo cheio, aqui para voltar")
window.history.back()
}


/*const atualizardado=()=>{
  setTime_id(id)
  
  }*/


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
 
              

                <button onClick={createJogador}>Enviar</button>
                </div>
        </div>
    )
}