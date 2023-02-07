const express=require("express");

const cors=require("cors")
const e_sportsRoutes=require("./routes")

const app=express();

app.use(express.json());
app.use(cors())
app.use(e_sportsRoutes)

app.get("/teste", (req, res)=>{
    return res.json("funciona")
})

app.listen(3333, ()=>
console.log("estou aqui 3333")
)