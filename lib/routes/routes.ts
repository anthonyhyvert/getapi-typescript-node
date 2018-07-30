import { StockController } from "../controllers/StockController";

export class Routes {   
    
    public stockController: StockController = new StockController();

    public routes(app): void {          
        app.route('/stock/:sku')
        .get(this.stockController.getContacts)
    }
}