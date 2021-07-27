"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', 'HomeController.index');
Route_1.default.get('/about', 'HomeController.about');
Route_1.default.get('/contact', 'HomeController.contact');
Route_1.default.get('/login', 'HomeController.login');
Route_1.default.get('/register', 'HomeController.register');
//# sourceMappingURL=routes.js.map