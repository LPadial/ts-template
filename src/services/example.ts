import { ExampleModel } from '../models'
import { exampleSchema } from '../db';

export class ExampleService {
	model: ExampleModel;

	constructor(model: ExampleModel){
		this.model = model;
	}
	
	public getExample(): Promise<any> {
		return new Promise<any> (
			(resolve, reject) => {
				this.model.getExample()
					.then((example) => {
						resolve(example);
					})
				.catch((error) => {reject(error)})
			})
		}
}
