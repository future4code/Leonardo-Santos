import {User} from "../classes/User"
import {BaseDatabase} from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
  public insertUser = async(
    user: User
  ) => {
    try {
      await UserDatabase.connection.insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
      }).into('User_Arq')
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}