import { Request, Response } from 'express';

import { Sql } from "../database/Sql";

const sql = new Sql();

export class StockController{

    public getContacts (req: Request, res: Response) { 

        sql.selectBySku( req.params.sku, 
            (result)=>{
                res.status(200).json(result);
            }
        );
    }
}