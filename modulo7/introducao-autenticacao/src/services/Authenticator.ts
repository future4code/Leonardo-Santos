import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

const expiresIn = "1min";
export class Authenticator {
  public generateToken = (payload: AuthenticationData) => {
    const token = jwt.sign(payload, 
      process.env.JWT_KEY as string,
      {expiresIn: expiresIn});
      return token;
  }
}

type AuthenticationData = {
  id: string
}