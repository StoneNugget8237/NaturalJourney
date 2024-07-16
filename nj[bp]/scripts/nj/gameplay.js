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

world.afterEvents.entityHitEntity.subscribe((event)=>{
  const player=event.damagingEntity
  const item=player.getComponent("minecraft:equippable").getEquipment(EquipmentSlot.Mainhand)
  system.run(()=>{
    switch(item.typeId){
      case "nj:unstable_diamond_sword":
        var result=imatationtoolusing(player, item, "§b『不稳定的钻石剑』" )
        player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,result)
        break;
      case "nj:unstable_gold_sword":
        var result=imatationtoolusing(player, item, "§e『不稳定的金剑』" )
        player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,result)
        break;
      case "nj:unstable_iron_sword":
        var result=imatationtoolusing(player, item, "§7『不稳定的铁剑』" )
        player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,result)
        break;
      case "nj:unstable_diamond_axe":
        var result=imatationtoolusing(player, item, "§b『不稳定的钻石斧』" )
        player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,result)
        break;
      case "nj:unstable_gold_axe":
        var result=imatationtoolusing(player, item, "§e『不稳定的金斧』" )
        player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,result)
        break;
      case "nj:unstable_iron_axe":
        var result=imatationtoolusing(player, item, "§7『不稳定的铁斧』" )
        player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,result)
        break;
    }
  })
})


