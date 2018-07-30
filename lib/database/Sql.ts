import * as MySql from "mysql";
import { MySqlServer } from "./MySqlServer";

export class Sql {

    private server: MySqlServer = MySqlServer.createLocalhost();
    private client: any = undefined;


    private connect(){
        if(!this.client) {
            this.client = MySql.createConnection("mysql://"+this.server.getUser()+":"+this.server.getPassword()+"@"+this.server.getAddress()+":"+this.server.getPort()+"/"+this.server.getDatabase());
            this.client.connect();
        }        
    }

    private close() {
        if(this.client) {
            this.client.end();
        }
    }

    public selectBySku(sku: string, callback: (results)=>void) {
        this.connect();
        
        this.client.query(`
            Select wid,qty from Stock where sku = ?`, 
            sku,
            (error, results, fields) => {
                if (error) throw error;
                
                console.log(`Data return by query the ${sku} sku : `,results);
                let jsonResults = {sku : `${sku}`, stock : results};
                callback(jsonResults);
        });


    }
}