"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleRoutes = void 0;
const express_1 = require("express");
const models_1 = require("../models");
const mongoDB_1 = require("../db/mongoDB");
const services_1 = require("../services");
const controllers_1 = require("../controllers");
const controllers_2 = require("../controllers");
//import * as md_checkLogin from '../../middlewares/authenticated';
//import * as md_checkrole from '../../middlewares/permissions';
class ExampleRoutes {
    constructor() {
        this.routes = (0, express_1.Router)();
        this.mongo = new mongoDB_1.MongoDB();
        this.model = new models_1.ExampleModel(this.mongo);
        this.service = new services_1.ExampleService(this.model);
        this.controller = new controllers_1.ExampleController(this.service);
        this.testController = new controllers_2.TestController();
        this.initRoutes();
    }
    initRoutes() {
        this.routes.get('/test', this.testController.print.bind(this.testController));
        this.routes.get('/example', this.controller.getExample.bind(this.controller));
    }
}
exports.ExampleRoutes = ExampleRoutes;
//# sourceMappingURL=example.js.map