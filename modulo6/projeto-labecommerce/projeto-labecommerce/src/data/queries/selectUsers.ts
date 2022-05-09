import { User } from "../../types";
import { connection } from "../connection";


export const selectUsers = async(): Promise <User[]> => {
    
    const users = await connection("labecommerce_users")
        .select("labecommerce_users.id","labecommerce_users.name","labecommerce_users.email")

    return users
}


export const getUserByEmail = async(email: string): Promise <User[]> => {

    const  [user]  = await connection("labecommerce_users")
        .where({email: email})

        return user
}


export const getUserById = async(userId: string): Promise <User> => {

    const user  = await connection("labecommerce_users")
        .where({id: userId})

        return user[0]
}