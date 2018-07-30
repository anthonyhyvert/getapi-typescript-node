# getapi-typescript-node

Typescript application that expose a Express Rest API with MySQL integration.


## Install dependances globally
```
npm install -g typescript ts-node
```

```
git clone ...
npm install
```

## Prerequisite : 
MySQL 5.7 (Default configuration)


## Create MySQL table 
```
CREATE TABLE stock (
  jsonDetails JSON,
  sku VARCHAR(255) GENERATED ALWAYS AS (jsonDetails->>"$.sku") NOT NULL, 
  wid VARCHAR(255) GENERATED ALWAYS AS (jsonDetails->>"$.wid") NOT NULL, 
  qty INT GENERATED ALWAYS AS (jsonDetails->"$.qty") NOT NULL
)

CREATE UNIQUE INDEX sku_wid_idx ON stock(sku,wid); 
```
