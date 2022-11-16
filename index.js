var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * @Author: chase 161221294@hytera.com
 * @Date: 2022-11-16
 * @LastEditors: chase 161221294@hytera.com
 * @LastEditTime: 2022-11-16
 * @FilePath: /node-demo/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { JsonObject, JsonSerializer, JsonProperty, } from 'typescript-json-serializer';
const json = {
    SenderID: '123456',
    SenderName: 'Tom',
    VoiceRecord: [
        {
            GUID: 'xxx-xxx-xxx',
            StartTime: '2022-11-10 10:00:00',
            EndTime: '2022-11-10 10:00:00',
        },
        {
            GUID: 'xxx-xxx-xxx',
            StartTime: '2022-11-10 10:00:00',
            EndTime: '2022-11-10 10:00:00',
        },
    ]
};
let VoiceRecord = class VoiceRecord {
};
__decorate([
    JsonProperty({ name: 'GUID' }),
    __metadata("design:type", String)
], VoiceRecord.prototype, "guid", void 0);
__decorate([
    JsonProperty({ name: 'StartTime' }),
    __metadata("design:type", String)
], VoiceRecord.prototype, "startTime", void 0);
__decorate([
    JsonProperty({ name: 'EndTime' }),
    __metadata("design:type", String)
], VoiceRecord.prototype, "endTime", void 0);
VoiceRecord = __decorate([
    JsonObject()
], VoiceRecord);
let UserModel = class UserModel {
};
__decorate([
    JsonProperty({ name: 'SenderID' }),
    __metadata("design:type", String)
], UserModel.prototype, "senderId", void 0);
__decorate([
    JsonProperty({ name: 'SenderName' }),
    __metadata("design:type", String)
], UserModel.prototype, "senderName", void 0);
__decorate([
    JsonProperty({ name: 'VoiceRecord', type: VoiceRecord }),
    __metadata("design:type", Array)
], UserModel.prototype, "voiceRecord", void 0);
UserModel = __decorate([
    JsonObject()
], UserModel);
const serializer = new JsonSerializer();
const d = serializer.deserialize(json, UserModel);
const s = serializer.serialize(d);
console.log(d);
console.log(s);
//# sourceMappingURL=index.js.map