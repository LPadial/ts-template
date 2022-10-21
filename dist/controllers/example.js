"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleController = void 0;
class ExampleController {
    constructor(service) {
        this.service = service;
    }
    getExample(req, res, next) {
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
exports.ExampleController = ExampleController;
//# sourceMappingURL=example.js.map