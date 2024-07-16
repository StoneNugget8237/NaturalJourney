import { EquipmentSlot, ItemStack, world, system } from "@minecraft/server";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function giveAward(player, itemStack, itemName, itemId, min, max) {
  const awardAmount = randomInteger(min, max);
  if (itemStack.amount - 1 <= 0) {
    var newItemStack = undefined;
  } else {
    itemStack.amount -= 1;
    var newItemStack = itemStack;
  }
  player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,newItemStack)
  var prize=new ItemStack(itemId, awardAmount)
  player.sendMessage({
    text: `恭喜您，获得了奖品§c『${itemName}』§r*${awardAmount}`,
    with: [awardAmount.toString()],
  });
  player.getComponent("inventory").container?.addItem(new ItemStack(`${itemId}`,awardAmount))
}

world.afterEvents.itemUse.subscribe((event) => {
  const player = event.source;
  const itemStack = event.itemStack;
  const itemId = itemStack.typeId;
  switch (itemId) {
    case "nj_ext:copper_coin_lottery":
      try {
        new ItemStack("hy:copper_coin");
      } catch (ignored) {
        player.sendMessage(
          "§c[自然行记·玩法扩展]隐藏之年（²）未安装或版本有误，请安装或更新隐藏之年（²）",
        );
        return;
      }
      giveAward(player, itemStack, "铜币", "hy:copper_coin", 15, 25);
      break;
    case "nj_ext:diamond_coin_lottery":
      try {
        new ItemStack("hy:copper_coin");
      } catch (ignored) {
        player.sendMessage(
          "§c[自然行记·玩法扩展]隐藏之年（²）未安装或版本有误，请安装或更新隐藏之年（²）",
        );
        return;
      }
      giveAward(player, itemStack, "钻石币", "hy:diamond_coin", 2, 4);
      break;
    case "nj_ext:gold_coin_lottery":
      try {
        new ItemStack("hy:copper_coin");
      } catch (ignored) {
        player.sendMessage(
          "§c[自然行记·玩法扩展]隐藏之年（²）未安装或版本有误，请安装或更新隐藏之年（²）",
        );
        return;
      }
      giveAward(player, itemStack, "金币", "hy:gold_coin", 17, 24);
      break;
    case "nj_ext:stone_coin_lottery":
      try {
        new ItemStack("sc:stone_coin");
      } catch (ignored) {
        player.sendMessage(
          "§c[自然行记·玩法扩展]石头工艺未安装或版本有误，请安装或更新石头工艺",
        );
        return;
      }
      giveAward(player, itemStack, "石币", "sc:stone_coin", 50, 64);
      break;
    case "nj_ext:emerald_lottery":
      giveAward(player, itemStack, "绿宝石", "minecraft:emerald", 17, 23);
      break;
  }    
})


