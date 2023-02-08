import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './navbar/navbar'
import { Home } from './pages/home/home'
import { Time } from './pages/time/time'
import { Jogador } from './pages/jogador/jogador'

export const Rotas=()=>{
    return(
        <BrowserRouter>
        <Navbar/>
       
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Jogador' element={<Jogador/>}/>
        <Route path='/Time' element={<Time/>}/>

        </Routes>
        </BrowserRouter>
    )
}