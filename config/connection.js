const defaultConnecton = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1booleanbros',
    database: 'flamegame'
};

const mysql = require( 'mysql' );
const connectionString = process.env.JAWSDB_URL || defaultConnecton;

class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
    }
    query( sql, args=[] ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err ) {
                    return reject( err );
                }
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err ) {
                    return reject( err );
                }
                resolve();
            } );
        } );
    }
}

const db = new Database(connectionString);

module.exports = db;