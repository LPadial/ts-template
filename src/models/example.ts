import {MongoDB} from '../db';

export class ExampleModel {

	connect: MongoDB;

	constructor(connect: MongoDB){
		this.connect = connect;
	}
	
	getExample(): Promise<any> {
		return new Promise<any> (
			(resolve, reject) => {
				try{
					const example = this.connect.example;
					resolve(example);
				}catch(error){
					reject(error);
				}
		})
						
		}
}
