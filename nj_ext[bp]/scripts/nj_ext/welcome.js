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
    world.sendMessage("%nj_ext.message.version\n%nj_ext.message.update\n%nj_ext.message.copyright")
  } 
  if (needsendupdatemessage==1) {
    player.sendMessage(
      player.sendMessage({translate:"nj_ext.message.lowversion",with:[latestLoadednjextVersion,version]})
    );
  }
  try {
    new ItemStack("nj:iron_enhance_dust");
  } catch (ignored) {
    player.sendMessage("%nj_ext.message.nonj")
  }
  warned = true;

});
