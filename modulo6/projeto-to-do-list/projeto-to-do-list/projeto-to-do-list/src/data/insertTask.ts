import { connection } from "../index";

export default async function insertTask(
  id:string,
  title:string,
  description:string,
  deadline:string,
  authorId:string
){
  await connection('TodoListTask')
  .insert({
    id,
    title,
    description,
    deadline,
    author_id: authorId
  })
}