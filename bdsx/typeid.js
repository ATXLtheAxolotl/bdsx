"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeIdCounter = void 0;
const dnf_1 = require("./dnf");
const minecraft_1 = require("./minecraft");
const nativeclass_1 = require("./nativeclass");
const typeidmap = Symbol();
/**
 * dummy class for typeid
 */
class TypeIdCounter extends nativeclass_1.NativeClass {
    static makeId(type) {
        const map = this[typeidmap];
        const typeid = map.get(type);
        if (typeid != null) {
            return typeid;
        }
        const TypeIdClass = minecraft_1.typeid_t.make(this);
        if (TypeIdClass.count === 0)
            throw Error('Cannot make type_id before launch');
        const getTypeId = (0, dnf_1.dnf)(minecraft_1.type_id).getByTemplates(null, this, type);
        if (getTypeId != null) {
            const newid = getTypeId();
            map.set(type, newid);
            return newid;
        }
        else {
            const newid = new minecraft_1.typeid_t(true);
            newid.id = TypeIdClass.count++;
            map.set(type, newid);
            return newid;
        }
    }
}
exports.TypeIdCounter = TypeIdCounter;
_a = typeidmap;
TypeIdCounter[_a] = new WeakMap();
//# sourceMappingURL=typeid.js.map