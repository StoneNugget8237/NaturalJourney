import { system, world } from "@minecraft/server";
import { version } from "../main";
import { compare } from "../dependencies/node-version-compare";


world.afterEvents.playerSpawn.subscribe((event) => {
  if (!event.initialSpawn) return;
  let latestLoadedNjExtVersion = world.getDynamicProperty(
    "LatestLoadedNjExtAddonVersion",
  );
  if (typeof latestLoadedNjExtVersion !== "string") {
    latestLoadedNjExtVersion = "0.0.0";
  }
  const player = event.player;
  var needsendupdatemessage = compare(latestLoadedNjExtVersion, version)
  if (needsendupdatemessage == -1) {
    world.setDynamicProperty("LatestLoadedNjExtAddonVersion", version);
    player.sendMessage("%nj_ext.message.version\n%nj_ext.message.update\n%nj_ext.message.copyright")
    player.sendMessage("%nj_ext.message.trial")
  } 
  if (needsendupdatemessage == 1) {
    player.sendMessage({translate:"nj_ext.message.lowversion",with:[latestLoadedNjExtVersion,version]})
  }
});
