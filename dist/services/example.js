"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleService = void 0;
class ExampleService {
    constructor(model) {
        this.model = model;
    }
    getExample() {
        return new Promise((resolve, reject) => {
            this.model.getExample()
                .then((example) => {
                resolve(example);
            })
                .catch((error) => { reject(error); });
        });
    }
}
exports.ExampleService = ExampleService;
//# sourceMappingURL=example.js.map