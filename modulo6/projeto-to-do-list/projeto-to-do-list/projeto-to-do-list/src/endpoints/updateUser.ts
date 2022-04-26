import { Request, Response } from "express";
import editUser from "../data/editUser";


export default async function updateUser(
  req: Request,
  res: Response
){
  try {
    if(
      req.body.name === '' ||
      req.body.nickname === '' ||
      req.body.email === ''
    ){
      res.status(400).send({
        message: "Os campos não podem estar vazios"
      })

      return
    }
    if(!req.body.name && !req.body.nickname && !req.body.email){
      res.status(400).send({
        message: 'Escolha um valor para alterar'
      })
    }

    await editUser(
      req.params.id,
      req.body.name,
      req.body.nickname,
      req.body.email
    )

    res.status(200).send({
      message: "Usuário alterado!"
    })

  } catch (error) {
    res.status(400).send({
      message: error
    })
  }
}