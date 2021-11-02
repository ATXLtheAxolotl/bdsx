import { bin64_t, int64_as_float_t } from "../nativetype";
declare module "../minecraft" {
    interface ScoreboardId {
        id: bin64_t;
        idAsNumber: int64_as_float_t;
        identityDef: IdentityDefinition;
    }
}