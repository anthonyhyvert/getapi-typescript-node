"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StockController_1 = require("../controllers/StockController");
class Routes {
    constructor() {
        this.stockController = new StockController_1.StockController();
    }
    routes(app) {
        app.route('/stock/:sku')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map