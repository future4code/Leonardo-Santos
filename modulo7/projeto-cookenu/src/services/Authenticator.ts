import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../model/User";
import dotenv from "dotenv"

dotenv.config()

export class Authenticator {
  public generateToken = (payload: AuthenticationData): string => {
    const token = jwt.sign(payload,
      process.env.JWT_KEY as string,
      { expiresIn: "10h" });
    
    return token;
  };

  public getTokenData = (token: string): AuthenticationData => {

    const payload = jwt.verify(token, process.env.JWT_KEY as string) as jwt.JwtPayload
    const result: AuthenticationData = { id: payload.id }

    return result
  }
}
