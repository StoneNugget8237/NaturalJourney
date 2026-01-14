import { system, world } from "@minecraft/server";
import { version } from "../main";
import { compare } from "../dependencies/node-version-compare";


world.afterEvents.playerSpawn.subscribe((event) => {
  if (!event.initialSpawn) return;
  let latestLoadedNjVersion = world.getDynamicProperty(
    "LatestLoadedNjAddonVersion",
  );
  if (typeof latestLoadedNjVersion !== "string") {
    latestLoadedNjVersion = "0.0.0";
  }
  const player = event.player;
  var needsendupdatemessage = compare(latestLoadedNjVersion, version)
  if (needsendupdatemessage == -1) {
    world.setDynamicProperty("LatestLoadedNjAddonVersion", version);
    player.sendMessage("%nj.message.version\n%nj.message.update\n%nj.message.copyright")
    player.sendMessage("%nj.message.trial")
  } 
  if (needsendupdatemessage == 1) {
    player.sendMessage({translate:"nj.message.lowversion",with:[latestLoadedNjVersion,version]})
  }
});
