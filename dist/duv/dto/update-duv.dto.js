"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDuvDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_duv_dto_1 = require("./create-duv.dto");
class UpdateDuvDto extends (0, mapped_types_1.PartialType)(create_duv_dto_1.CreateDuvDto) {
}
exports.UpdateDuvDto = UpdateDuvDto;
//# sourceMappingURL=update-duv.dto.js.map