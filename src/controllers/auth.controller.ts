import { Request, Response, NextFunction } from 'express'
import Account from '../models/Account'
import * as bcrypt from 'bcrypt'
import { Validator } from '../validators/export'
import { JwtService } from '../auth/jwt.service'


const jwtService = new JwtService()

const AuthController = {
  login: async (req: Request, res: Response, next: NextFunction) => {

    const validate: any = Validator(req.body, `login`)

    try {
      const { email, password } = req.body

      const [isEmailExist] = await Account.find({
        email: email
      })

      if (Object.keys(validate).length !== 0) {
        res.status(422).json({
          status: 422,
          message: validate
        })
        return
      }

      if (!isEmailExist) {
        res.status(409).json({
          status: 409,
          message: `Email does'nt exist.`
        })
        return
      }

      bcrypt.compare(password, isEmailExist.password, async (_err: any, isMatch: boolean) => {
        if (!isMatch) {
          res.status(409).json({
            status: 409,
            message: `Incorrect Password.`
          })
        } else {
          const jwt = await jwtService.createAccessToken(isEmailExist)
            .catch(error => {
              next(error)
            })

          res.status(200).json({
            status: 200,
            message: jwt
          })
        }
      })

    } catch (err: any) {
      res.status(500).json({
        message: err
      })
    }

  },
  register: async (req: Request, res: Response) => {

    const validate: any = Validator(req.body, `register`)

    const { role, name, email, password, yearLvl, division } = req.body
    const salt: number = 10

    const [isEmailExist] = await Account.find({
      email: email
    })

    try {

      bcrypt.hash(password, salt, async (_err: any, encryptedPass: string) => {
        const addUser = new Account({
          role: role,
          yearLvl: yearLvl,
          division: division,
          name: name,
          email: email,
          password: encryptedPass
        })

        if (isEmailExist) {
          res.status(409).json({
            status: 409,
            message: `Email Already Exist`
          })
          return
        }

        if (Object.keys(validate).length !== 0) {
          res.status(422).json({
            status: 422,
            message: validate
          })
        } else {
          await addUser.save()
          res.status(200).json({
            status: 200,
            message: `You have successully register to Portal`
          })


        }

      })

    } catch (err: any) {
      res.status(500).json({
        message: err
      })
    }

  }
}

export default AuthController