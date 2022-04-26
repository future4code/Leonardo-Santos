import { connection } from "../index";

export default async function selectUserById(
  id:string
){
  const result = await connection('TodoListUser')
  .select('*')
  .where({id})
  
  return result[0]
}