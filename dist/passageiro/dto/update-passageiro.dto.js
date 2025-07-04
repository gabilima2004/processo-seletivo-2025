"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePassageiroDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_passageiro_dto_1 = require("./create-passageiro.dto");
class UpdatePassageiroDto extends (0, mapped_types_1.PartialType)(create_passageiro_dto_1.CreatePassageiroDto) {
}
exports.UpdatePassageiroDto = UpdatePassageiroDto;
//# sourceMappingURL=update-passageiro.dto.js.map