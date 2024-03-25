import { world } from "@minecraft/server";
import {
  ActionFormData,
  MessageFormData,
  ModalFormData,
} from "@minecraft/server-ui";

function displaySettingsPage(player) {
  const settingsPageForm = new ActionFormData();
  settingsPageForm.title("隐藏之年·更远的旅程 - Addon设置");
  settingsPageForm.body("您可以在这里编辑隐藏之年·更远的旅程Addon的设置");
  settingsPageForm.button("扩展包设置");
  settingsPageForm.show(player).then((response) => {
    if (response.selection === 0) {
      displayExtendPacksSelectionPage(player);
    }
  });
}
function displayExtendPacksSelectionPage(player) {
  const isSCExtActive = world.getDynamicProperty("hy_farjy:enablescexp");
  if (typeof isSCExtActive !== "boolean") {
    world.setDynamicProperty("hy_farjy:enablescexp", false);
  }
  const extendPacksForm = new ModalFormData();
  extendPacksForm.title("选择启用的扩展包");
  if (isSCExtActive === true) {
    extendPacksForm.toggle("Stone Craft扩展包", true);
  } else {
    extendPacksForm.toggle("Stone Craft扩展包", false);
  }
  extendPacksForm.show(player).then((response) => {
    const [isSCExtendPackSelected] = response.formValues;
    if (isSCExtendPackSelected === true) {
      world.setDynamicProperty("hy_farjy:enablescexp", true);
    } else {
      world.setDynamicProperty("hy_farjy:enablescexp", false);
    }
  });
}

world.beforeEvents.itemUse.subscribe((event) => {
  const player = event.source;
  if (event.itemStack.typeId === "minecraft:stick") {
    if (!player.isOp()) {
      player.sendMessage("权限不足！");
      return;
    }
    displaySettingsPage(player);
  }
});
