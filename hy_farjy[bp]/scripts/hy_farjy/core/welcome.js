import { world } from "@minecraft/server";

world.afterEvents.playerSpawn.subscribe((event)=>{
    world.setDynamicProperty("ActiveHyfarjyAddonVersion",10001)
    const ActiveAddonVersion=world.getDynamicProperty("ActiveHyfarjyAddonVersion")
    const LatestLoadedAddonVersion=world.getDynamicProperty("LatestLoadedHyfarjyAddonVersion")
    if(LatestLoadedAddonVersion==undefined||LatestLoadedAddonVersion<ActiveAddonVersion){
      world.setDynamicProperty("LatestLoadedHyfarjyAddonVersion",ActiveAddonVersion)
    }
    if(ActiveAddonVersion<LatestLoadedAddonVersion){
      world.sendMessage(`§c[隐藏之年·更远的旅程]不支持对Addon降级！世界中有Addon版本${Math.floor(LatestLoadedAddonVersion/1000000)}.${Math.floor(LatestLoadedAddonVersion%1000000/10000)}.${Math.floor(LatestLoadedAddonVersion%10000/100)}+build.${Math.floor(LatestLoadedAddonVersion%100)}的加载记录,但当前使用的版本为${Math.floor(ActiveAddonVersion/1000000)}.${Math.floor(ActiveAddonVersion/10000%100)}.${Math.floor(ActiveAddonVersion/100%100)}+build.${Math.floor(ActiveAddonVersion%100)}`)
    }
  })