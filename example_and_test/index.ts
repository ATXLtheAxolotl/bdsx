import { CommandPermissionLevel } from "bdsx/bds/command";
import { storageManager } from "bdsx/storage";
import { command } from "bdsx/command";
import * as colors from "colors";

const storage = storageManager.getSync("examples");
if (storage.data === undefined) storage.init({ value: true });
else if (storage.data.value) require("./examples");

command
    .register("examples", "A command that allows users to enable/disable examples.", CommandPermissionLevel.Host)
    .overload(
        () => {
            if (!storage.data.value) console.log(colors.green("Examples have been enabled, restart BDSX for effects to apply."));
            else console.log(colors.red("Examples have already been enabled."));

            storage.data.value = true;
        },
        {
            option: command.enum("option.enable", "enable"),
        },
    )
    .overload(
        () => {
            if (storage.data.value) console.log(colors.green("Examples have been disabled, restart BDSX for effects to apply."));
            else console.log(colors.red("Examples have already been disabled."));

            storage.data.value = false;
        },
        {
            option: command.enum("option.disable", "disable"),
        },
    );
