import { Request, Response, NextFunction } from "express";
import { jwtKey } from "../auth/secret";
import jwt from "jsonwebtoken";

const { secretkey } = jwtKey;

interface UserProps {
  _id: string;
  role: string;
}

export class JwtService {
  verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
      const bearerHeader = req.headers.authorization;
      const bearer: any = bearerHeader?.split(` `);
      const bearerToken = bearer[1];

      if (bearerToken !== undefined) {
        //@ts-ignore
        req.token = bearerToken;

        next();
      } else {
        res.status(403).json({
          status: 403,
          error: `Forbidden`,
        });
      }
    } catch (err) {
      res.status(403).json({
        status: 403,
        error: `Forbidden`,
      });
    }
  }

  createAccessToken(data: UserProps) {
    const user: UserProps = {
      _id: data._id,
      role: data.role,
    };

    return new Promise((reject, resolve) => {
      jwt.sign(user, secretkey, (err: any, token: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
          return token;
        }
      });
    }).catch((response) => {
      return response;
    });
  }
}
