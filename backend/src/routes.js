
const { request, response } = require("express");
const express =require("express")
const e_sportsRoutes=express.Router()
const {PrismaClient} = require("@prisma/client")
const prisma =new PrismaClient();



e_sportsRoutes.post("/time", async(request, response)=>{
    const {name}=request.body;
    //conexçaõ criada;
    const time = await prisma.time.create({
        data:{
        name
    },
    });
   
    return response.status(201).json(time)
    });
    
    //read
    e_sportsRoutes.get("/time",async(request, response)=>{
    const time = await prisma.time.findMany()

      return response.status(200).json(time)
    })
    
    //update 
    e_sportsRoutes.put("/time", async(request, response)=>{
        const {name, id}=request.body;
    if(!id){
        return response.status(400).json("id is mandatory")
    }
    
    const timeAlreadyExist=await prisma.time.findUnique({where:{id} });
    
    if(!timeAlreadyExist){
        return response.status(404).json("time not exist")
    }
    
        const time=await prisma.time.update({
            where:{
                id, 
        },
        data:{
            name,
         
        },
    })
    
    return response.status(200).json(time)
    
    })
    //delete 
    e_sportsRoutes.delete("/time/:id", async(request, response)=>{
        const {id } = request.params
    
    const intId=parseInt(id)
    
        if(!intId){
            return response.status(400).json("id is mandatory")
        }
        
        const timeAlreadyExist=await prisma.time.findUnique({where:{ intId} });
        
        if(!timeAlreadyExist){
            return response.status(404).json("time not exist")
        }
        await prisma.time.delete({where:{ intId}});
        return response.status(200).send()
    })
    
    //rotas do cliente
    e_sportsRoutes.post("/jogador", async(request, response)=>{
        const {name}=request.body;
        const {idade}=request.body;
        const {time_id}=request.body;

        //conexçaõ criada;
        const jogador = await prisma.jogador.create({
            data:{
            name,
            idade,
            time_id
        },
        });
       
        return response.status(201).json(jogador)
        });
        
        //read
        e_sportsRoutes.get("/jogador",async(request, response)=>{
        const jogador = await prisma.jogador.findMany()
        
          return response.status(200).json(jogador)
        })
    //exportando
    module.exports=e_sportsRoutes;
