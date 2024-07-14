import { world } from "@minecraft/server";
import { version } from "../../main";
import { compare } from "../../dependencies/node-version-compare";


let latestLoadedHyFarjyVersion = world.getDynamicProperty(
  "LatestLoadedHyfarjyAddonVersion",
);
if (typeof latestLoadedHyFarjyVersion !== "string") {
  latestLoadedHyFarjyVersion = "0.0.0";
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
  var needsendupdatemessage=compare(latestLoadedHyFarjyVersion, version)
  if (needsendupdatemessage==-1) {
    world.setDynamicProperty("LatestLoadedHyfarjyAddonVersion", version);
    world.sendMessage("%hy_farjy.version\n%hy_farjy.update\n%hy_farjy.copyright")
  } 
  if (needsendupdatemessage==1) {
    player.sendMessage(
      `§c[隐藏之年·更远的旅程]不支持对Addon降级！世界中有Addon版本${latestLoadedHyFarjyVersion}的加载记录,但当前使用的版本为${version}`,
    );
  }
  warned = true;
});
