import { world, ItemStack } from "@minecraft/server";
import { version } from "../main";
import { compare } from "../dependencies/node-version-compare";


let latestLoadednjextVersion = world.getDynamicProperty(
  "LatestLoadednjextAddonVersion",
);
if (typeof latestLoadednjextVersion !== "string") {
  latestLoadednjextVersion = "0.0.0";
}
let warned = false;

world.afterEvents.playerSpawn.subscribe((event) => {
  if (!event.initialSpawn) {
    return;
  }
  const player = event.player;
  if (warned && !player.isOp()) {
    return;
  }
  var needsendupdatemessage=compare(latestLoadednjextVersion, version)
  if (needsendupdatemessage==-1) {
    world.setDynamicProperty("LatestLoadednjextAddonVersion", version);
    world.sendMessage("%nj_ext.version\n%nj_ext.update\n%nj_ext.copyright")
  } 
  if (needsendupdatemessage==1) {
    player.sendMessage(
      `§c[自然行记·玩法扩展]不支持对Addon降级！世界中有Addon版本${latestLoadednjextVersion}的加载记录,但当前使用的版本为${version}`,
    );
  }
  try {
    new ItemStack("nj:iron_enhance_dust");
  } catch (ignored) {
    player.sendMessage(
      "§c[自然行记·玩法扩展]自然行记本体未安装或版本有误，请安装或更新自然行记本体"
    )
  }
  warned = true;

});
