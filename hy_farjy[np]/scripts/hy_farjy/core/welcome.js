import { world } from "@minecraft/server";
import { version } from "../../main";
import * as semver from "../../dependencies/semver";

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
  if (semver.lt(latestLoadedHyFarjyVersion, version)) {
    world.setDynamicProperty("LatestLoadedHyfarjyAddonVersion", version);
    world.sendMessage("%hy_farjy.version\n%hy_farjy.update\n%hy_farjy.copyright")
  } else {
    player.sendMessage(
      `§c[隐藏之年·更远的旅程]不支持对Addon降级！世界中有Addon版本${latestLoadedHyFarjyVersion}的加载记录,但当前使用的版本为${version}`,
    );
  }
  warned = true;
});
