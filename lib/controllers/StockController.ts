import { Request, Response } from 'express';

import { Sql } from "../database/Sql";

const sql = new Sql();

export class StockController{

    public getContacts (req: Request, res: Response) { 
        console.log(`Stock for SKU ${req.params.sku} :`);
        sql.selectBySku(req.params.sku);
    }
}