import { Request, Response, NextFunction } from 'express';
import { ExampleService } from '../services';

export class ExampleController {

	service: ExampleService;

	constructor(service: ExampleService) {
		this.service = service;
	}

	public getExample(req: Request, res: Response, next: NextFunction) {
		this.service.getExample()
		.then((example) => {
			res.status(200).jsonp(example);
			next();
		})
		.catch((error) => {
			console.log(error);
			next();
		});
	}
}