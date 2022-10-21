export class TestController {

	myNumber = 5;

	constructor() {
		this.myNumber = 4;
	}

	print() {
		console.log(this.myNumber);
	}
}
