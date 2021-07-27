"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeController {
    async index({ inertia }) {
        return inertia.render('Home');
    }
    async about({ inertia }) {
        return inertia.render('About');
    }
    async contact({ inertia }) {
        return inertia.render('Contact');
    }
    async login({ inertia }) {
        return inertia.render('Login');
    }
    async register({ inertia }) {
        return inertia.render('Register');
    }
}
exports.default = HomeController;
//# sourceMappingURL=HomeController.js.map