import { world } from "@minecraft/server";
import { version } from "../main";
import { compare } from "../dependencies/node-version-compare";


let latestLoadedNjVersion = world.getDynamicProperty(
  "LatestLoadedNjAddonVersion",
);
if (typeof latestLoadedNjVersion !== "string") {
  latestLoadedNjVersion = "0.0.0";
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
  var needsendupdatemessage=compare(latestLoadedNjVersion, version)
  if (needsendupdatemessage==-1) {
    world.setDynamicProperty("LatestLoadedNjAddonVersion", version);
    world.sendMessage("%nj.version\n%nj.update\n%nj.copyright")
  } 
  if (needsendupdatemessage==1) {
    player.sendMessage(
      `§c[自然行记]不支持对Addon降级！世界中有Addon版本${latestLoadedNjVersion}的加载记录,但当前使用的版本为${version}`,
    );
  }
  warned = true;
});
