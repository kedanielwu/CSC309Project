# group5

## Instructions

### Database

If not installed, you will first need to install MongoDB Community edition.  Download information and instructions are [here](https://docs.mongodb.com/manual/installation/?jmp=footer).

Create a directory to store the database in.

```
mkdir database
```

Run an instance of the database server.

```
mongod --dbpath=$PWD/database
```

### Seed the database

The next step is to populate the database with data.  We will [import the JSON file](https://www.zaiste.net/2012/08/importing_json_into_mongodb/) into the database.

```
mongoimport --db <db_name> --collection <schema_name> --type json --file <json_file> --jsonArray
```

For our sake, you will import the `user` and `listing` schemas.

### Run the server

```node server.js```