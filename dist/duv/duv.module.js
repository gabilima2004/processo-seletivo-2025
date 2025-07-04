"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuvModule = void 0;
const common_1 = require("@nestjs/common");
const duv_service_1 = require("./duv.service");
const duv_controller_1 = require("./duv.controller");
let DuvModule = class DuvModule {
};
exports.DuvModule = DuvModule;
exports.DuvModule = DuvModule = __decorate([
    (0, common_1.Module)({
        controllers: [duv_controller_1.DuvController],
        providers: [duv_service_1.DuvService],
    })
], DuvModule);
//# sourceMappingURL=duv.module.js.map