"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNavioDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_navio_dto_1 = require("./create-navio.dto");
class UpdateNavioDto extends (0, mapped_types_1.PartialType)(create_navio_dto_1.CreateNavioDto) {
}
exports.UpdateNavioDto = UpdateNavioDto;
//# sourceMappingURL=update-navio.dto.js.map