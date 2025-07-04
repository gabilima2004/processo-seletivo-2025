"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavioController = void 0;
const common_1 = require("@nestjs/common");
const navio_service_1 = require("./navio.service");
const create_navio_dto_1 = require("./dto/create-navio.dto");
const update_navio_dto_1 = require("./dto/update-navio.dto");
let NavioController = class NavioController {
    navioService;
    constructor(navioService) {
        this.navioService = navioService;
    }
    create(createNavioDto) {
        return this.navioService.create(createNavioDto);
    }
    findAll() {
        return this.navioService.findAll();
    }
    findOne(id) {
        return this.navioService.findOne(id);
    }
    update(id, updateNavioDto) {
        return this.navioService.update(id, updateNavioDto);
    }
    remove(id) {
        return this.navioService.remove(id);
    }
};
exports.NavioController = NavioController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_navio_dto_1.CreateNavioDto]),
    __metadata("design:returntype", void 0)
], NavioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NavioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NavioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_navio_dto_1.UpdateNavioDto]),
    __metadata("design:returntype", void 0)
], NavioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NavioController.prototype, "remove", null);
exports.NavioController = NavioController = __decorate([
    (0, common_1.Controller)('navio'),
    __metadata("design:paramtypes", [navio_service_1.NavioService])
], NavioController);
//# sourceMappingURL=navio.controller.js.map