"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StockController {
    getContacts(req, res) {
        console.log(`Stock for SKU ${req.params.sku} :`);
        // Contact.find({}, (err, contact) => {
        //     if(err){
        //         res.send(err);
        //     }
        //     res.json(contact);
        // });
    }
}
exports.StockController = StockController;
//# sourceMappingURL=StockController.js.map