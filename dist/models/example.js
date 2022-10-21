"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleModel = void 0;
class ExampleModel {
    constructor(connect) {
        this.connect = connect;
    }
    getExample() {
        return new Promise((resolve, reject) => {
            try {
                const example = this.connect.example;
                resolve(example);
            }
            catch (error) {
                reject(error);
            }
        });
    }
}
exports.ExampleModel = ExampleModel;
//# sourceMappingURL=example.js.map