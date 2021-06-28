import { Request, Response } from "express";
import {jwtSign} from '../util/jwt'
import sessionProvider from "./sessionProvider";

class SessionController{
  public async index(req: Request, res: Response): Promise<Response>{
    const {login, password} = req.body

    try {
      const user = await sessionProvider.login(login,password)

      let payload = {
        _id: user.id,
        login: user.login
      }
      let token = jwtSign(payload)
  
      return res.json({ 
        data: {
          id:user.id, 
          name:user.name,
          token
        }
      });
    } catch (error) {
      return res.status(401).json({error: error.message?error.message:"Unexpected error"})
    }
  }
}

export default new SessionController()