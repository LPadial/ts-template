import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as methodOverride from 'method-override';
import helmet from 'helmet';
import {ExampleRoutes} from './routes/example';

/*const options = {
  key: fs.readFileSync("/srv/www/keys/my-site-key.pem"),
  cert: fs.readFileSync("/srv/www/keys/chain.pem")
};*/

const app = express();

//Middlewares

// Helmet is preventing various vulnerabilities so it should be the 
// first middleware to be called.
app.use(helmet());

// NOTE: when using req.body, you must fully parse the request body
// before you call methodOverride() in your middleware stack,
// otherwise req.body will not be populated
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

//You can access to the routes with this links
const exampleRoutes = new ExampleRoutes();
app.use('/example', exampleRoutes.routes);

//Start node server
/*https.createServer(options, app).listen(443, function() {
  console.log("Node server running on https://localhost");
});*/

app.listen(8080, function() {
  console.log("Node server running on http://localhost:8080");
});
