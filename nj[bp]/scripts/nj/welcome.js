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
    world.sendMessage("%nj.message.version\n%nj.message.update\n%nj.message.copyright")
  } 
  if (needsendupdatemessage==1) {
    player.sendMessage({translate:"nj.message.lowversion",with:[latestLoadedNjVersion,version]})
  }
  warned = true;
});
