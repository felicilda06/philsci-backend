import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { jwtKey } from "../auth/secret";
import Dates from "../models/Date";
import Area from "../models/Area";

const { secretkey } = jwtKey;

const EventController = {
  createDates: (req: Request, res: Response) => {
    try {
      const { date, status } = req.body;

      const newDate = new Dates({
        exclusiveDates: date,
        status,
      });

      //@ts-ignore

      //@ts-ignore
      jwt.verify(req.token, secretkey, async (err, data) => {
        if (err) {
          res.status(403).json({
            status: 403,
            error: err,
          });
        } else {
          await newDate.save();
          res.status(200).json({
            status: 200,
            message: `Dates Successfully Created`,
            data,
          });
        }
      });
    } catch (err: any) {
      res.status(500).json({
        message: err,
      });
    }
  },
  createArea: async (req: Request, res: Response) => {
    try {
      const { area } = req.body;

      const newArea = new Area({
        area: area,
      });

      //@ts-ignore
      jwt.verify(req.token, secretkey, async (err, data) => {
        if (err) {
          res.status(403).json({
            status: 403,
            error: err,
          });
        } else {
          await newArea.save();

          res.status(200).json({
            status: 200,
            message: `Area Successfully Created`,
            newArea,
          });
        }
      });
    } catch (err: any) {
      res.status(500).json({
        message: err,
      });
    }
  },
  getAreas: (req: Request, res: Response) => {
    try {
      //@ts-ignore
      jwt.verify(req.token, secretkey, (err, data) => {
        if (err) {
          res.status(403).json({
            status: 403,
            error: err,
          });
        } else {
          Area.find()
            .then((result) => {
              res.status(200).json({
                status: 200,
                result,
                data,
              });
            })
            .catch((err) => {
              return err;
            });
        }
      });
    } catch (err: any) {
      res.status(500).json({
        message: err,
      });
    }
  },
  fetchDates: (req: Request, res: Response) => {
    try {
      //@ts-ignore
      jwt.verify(req.token, secretkey, (err, data) => {
        if (err) {
          res.status(403).json({
            status: 403,
            error: err,
          });
        } else {
          Dates.find()
            .then((result) => {
              res.status(200).json({
                status: 200,
                result,
                data,
              });
            })
            .catch((err) => {
              return err;
            });
        }
      });
    } catch (err: any) {
      res.status(500).json({
        message: err,
      });
    }
  },
};

export default EventController;
