import { User } from "../../types";
import { connection } from "../connection";

export const insertUser = async(user: User): Promise <void> => {
    
     await connection("labecommerce_users")
    .insert(user) 
}