import express from 'express';
import { sequelize } from './sequelize';

import { IndexRouter } from './controllers/v0/index.router';

import bodyParser from 'body-parser';

import { V0MODELS } from './controllers/v0/model.index';
import {filterImageFromURL} from './util/util'
(async () => {
  await sequelize.addModels(V0MODELS);
  await sequelize.sync();

  const app = express();
  const port = process.env.PORT || 8082; // default port to listen
  
  app.use(bodyParser.json());

  //CORS Should be restricted
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8100");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  app.use('/api/v0/', IndexRouter)

  // Root URI call
  app.get( "/", async ( req, res ) => {
    res.send( "/api/v0/" );
  } );
  
  app.get( "/filteredimage", async ( req, res ) => {

    const image_url = req.query.image_url as string;
  
    if ( !image_url ) {
      return res.status(400)
                .send(`url is required`);
    }
  
    res.send(filterImageFromURL(image_url))
  } );  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();