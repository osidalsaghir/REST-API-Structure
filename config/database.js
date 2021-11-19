const mongoose = require( 'mongoose' ),
config = require( './config' ).getConfig();

class Connection {
    constructor() {
        
        const url = config.MONGO_URL;

        mongoose.connect(url).then( () => {
                console.log( '✔ Database Connected' );
            } ).catch( ( err ) => {
                console.error( '✘ MONGODB ERROR: ', err.message );
            } );

    }

    async connect( url ) {
        try {
            await mongoose.connect( url );
        } catch ( e ) {
            throw e;
        }
    }
}

module.exports = new Connection();