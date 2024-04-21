import { EquipmentSlot, ItemStack, world, system } from "@minecraft/server";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function imatationtoolusing(player,itemStack,itemName){
  const tooldamageamount=randomInteger(1, 10);
  if (tooldamageamount>=5){
    player.sendMessage(`这把${itemName}§r还是无法与真品媲美...`)
  }
  const durability=itemStack.getComponent("minecraft:durability");
  durability.damage += tooldamageamount;
  return itemStack;
}

function giveAward(player, itemStack, itemName, itemId, min, max) {
  const equipmentComponent = player.getComponent("minecraft:equippable");
  const inventoryContainer = player.getComponent("minecraft:inventory");
  const awardAmount = randomInteger(min, max);
  let newItemStack;
  if (itemStack.amount - 1 <= 0) {
    newItemStack = undefined;
  } else {
    itemStack.amount -= 1;
    newItemStack = itemStack;
  }
  equipmentComponent?.setEquipment(EquipmentSlot.Mainhand, newItemStack);
  inventoryContainer?.addItem(new ItemStack(itemId, awardAmount));
  player.sendMessage({
    text: `恭喜您，获得了奖品§c『${itemName}』§r%%1`,
    with: [awardAmount.toString()],
  });
}

world.afterEvents.itemUse.subscribe((event) => {
  const player = event.source;
  const itemStack = event.itemStack;
  const itemId = itemStack.typeId;
  system.run(()=>{
  switch (itemId) {
    case "hy_farjy:copper_coin_lottery":
      giveAward(player, itemStack, "铜币", "hy:copper_coin", 15, 25);
      break;
    case "hy_farjy:diamond_coin_lottery":
      giveAward(player, itemStack, "钻石币", "hy:diamond_coin", 2, 4);
      break;
    case "hy_farjy:gold_coin_lottery":
      giveAward(player, itemStack, "金币", "hy:gold_coin", 17, 24);
      break;
    case "hy_farjy:stone_coin_lottery":
      if (world.getDynamicProperty("hy_farjy:enablescexp") !== true) {
        player.sendMessage(
          "§c[隐藏之年·更远的旅程]“Stone Craft扩展包暂未启用，无法使用此物品，请前往Addon设置查看详情”\n若问题仍然存在，请前往隐藏之年交流圈向我们提出反馈",
        );
        return;
      }
      try {
        new ItemStack("sc:stone_coin");
      } catch (ignored) {
        player.sendMessage(
          "§c[隐藏之年·更远的旅程]“Stone Craft未安装或版本有误，请安装或更新石头工艺”\n若问题仍然存在，请前往隐藏之年交流圈向我们提出反馈",
        );
        return;
      }
      giveAward(player, itemStack, "石币", "sc:stone_coin", 50, 64);
      break;
    case "hy_farjy:emerald_lottery":
      giveAward(player, itemStack, "绿宝石", "minecraft:emerald", 17, 23);
      break;
  }    
})
});

world.afterEvents.entityHitEntity.subscribe((event)=>{
  const player=event.damagingEntity
  const item=player.getComponent("minecraft:equippable").getEquipment(EquipmentSlot.Mainhand)
  system.run(()=>{
    switch(item.typeId){
      case "hy_farjy:stable_iames":
        var result=imatationtoolusing(player, item, "§d『稳定的仿制紫水晶剑』" )
        player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,result)
        break;
      case "hy_farjy:stable_ids":
        var result=imatationtoolusing(player, item, "§b『稳定的仿制钻石剑』" )
        player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,result)
        break;
      case "hy_farjy:stable_igs":
        var result=imatationtoolusing(player, item, "§e『稳定的仿制黄金剑』" )
        player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,result)
        break;
      case "hy_farjy:stable_iis":
        var result=imatationtoolusing(player, item, "§7『稳定的仿制铁剑』" )
        player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,result)
        break;
    }
  })
})


