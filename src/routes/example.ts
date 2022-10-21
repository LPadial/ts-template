import { Router } from 'express';
import { ExampleModel } from '../models';
import { MongoDB } from '../db/mongoDB';
import { ExampleService } from '../services';
import { ExampleController } from '../controllers';
import { TestController } from '../controllers';
//import * as md_checkLogin from '../../middlewares/authenticated';
//import * as md_checkrole from '../../middlewares/permissions';

export class ExampleRoutes {

	routes = Router();
	mongo: MongoDB;
	model: ExampleModel;
	service: ExampleService;
	controller: ExampleController;
	testController: TestController

	constructor(){
		this.mongo = new MongoDB();
		this.model = new ExampleModel(this.mongo);
		this.service = new ExampleService(this.model);
		this.controller = new ExampleController(this.service);
		this.testController = new TestController();

		this.initRoutes();
	}

	initRoutes(){
		this.routes.get('/test', this.testController.print.bind(this.testController));
		this.routes.get('/example', this.controller.getExample.bind(this.controller));
	}
}