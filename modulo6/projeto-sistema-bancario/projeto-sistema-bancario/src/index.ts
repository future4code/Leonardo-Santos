import express, { Express, Request, Response} from "express";
import cors from "cors";
import { accounts } from "./accounts"

const app: Express = express()

app.use(express.json());
app.use(cors());

app.post("/users/create", (req:Request, res:Response) => {
  try {
    const {name, CPF, dateOfBirthAsString} = req.body

    const [day, month, year] = dateOfBirthAsString.split("/")

    const dateOfBirth: Date = new Date(`${year} - ${month} - ${day}`)

    const age:number = Date.now() - dateOfBirth.getTime()

    const ageInYear: number = age / 1000 / 60 / 60 / 24 / 365

    if(ageInYear < 18 ){
      res.statusCode = 406
      throw new Error("Idade deve ser maior que 18 anos")
    }

    accounts.push({
      name,
      CPF,
      dateOfBirth,
      saldo: 0,
      extrato: []
    })

    res.status(201).send("Conta criada!")
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

app.get("/users/all", (req: Request, res: Response) => {
  try {
    if(!accounts.length) {
      res.statusCode = 404
      throw new Error("Nenhuma conta criada")
    }
    res.status(200).send(accounts)
  } catch (error) {
    res.send(error)
  }
})

app.listen(3003, ()=> {
  console.log("Servidor rodando")
})