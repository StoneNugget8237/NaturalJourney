import { EquipmentSlot, ItemStack, world, system } from "@minecraft/server";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDisplayColor(itemStack){
  if(itemStack.hasTag("nj:made_of_diamond")==true){
    return "§b"
  }
  if(itemStack.hasTag("nj:made_of_gold")==true){
    return "§e"
  }
  if(itemStack.hasTag("nj:made_of_iron")==true){
    return "§7"
  }
  if(itemStack.hasTag("nj:made_of_stone")==true){
    return "§7"
  }
  if(itemStack.hasTag("nj:made_of_wood")==true){
    return "§6"
  }
  if(itemStack.hasTag("nj:made_of_netherite")==true){
    return "§8"
  }
}

function toolusing(player,itemStack,isHittingEntities,target,i){
  const packSettings = world.getPackSettings()
  const isDropEffectEnabled=packSettings["nj:enable_drop"]
  var weight=randomInteger(1, 100)
  console.log(`Random Weight is ${String(weight)}`)
  if(weight>=1&&weight<=3-i){
    player.addEffect("haste",60,{amplifier:0,showParticles:false})
    player.sendMessage(`%nj.message.haste`)
  }
  if(weight>=4-i&&weight<=7-2*i){
    const durability=itemStack.getComponent("minecraft:durability");
    durability.damage -= 1;
    player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,itemStack)
    player.sendMessage(`%nj.message.add_durability`)
  }
  if(weight>=8-2*i&&weight<=12-i){
    var damageamount=randomInteger(3, 5);
    const durability=itemStack.getComponent("minecraft:durability");
    durability.damage += damageamount;
    player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,itemStack)
    player.sendMessage(`%nj.message.reduce_durability_lv1`)
  }
  if(weight>=13-i&&weight<=14){
    var damageamount=randomInteger(6, 10);
    const durability=itemStack.getComponent("minecraft:durability");
    durability.damage += damageamount;
    player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,itemStack)
    player.sendMessage(`%nj.message.reduce_durability_lv2`)
  }
  if(weight>=15&&weight<=17+i){
    player.applyDamage(4)
    player.sendMessage(`%nj.message.damage`)
  }
  if(weight>=18+i&&weight<=19+2*i&&isDropEffectEnabled==true){
    var dimension=player.dimension
    var location=player.location
    var itemSummonx=location.x+randomInteger(-3, 3)
    var itemSummony=location.y+1
    var itemSummonz=location.z+randomInteger(-3, 3)
    var itemSummonLocation={x:itemSummonx,y:itemSummony,z:itemSummonz}
    player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand)
    dimension.setBlockType(itemSummonLocation,"minecraft:air")
    dimension.spawnItem(itemStack,itemSummonLocation)
    player.sendMessage(`%nj.message.drop`)
  }
  if(isHittingEntities==true){
    if(weight>=20+2*i&&weight<=21+2*i){
      target.applyDamage(4)
      player.sendMessage(`%nj.message.damage_enemy`)
    }
    if(weight===22+2*i){
      var health=player.getComponent("minecraft:health")
      var currentValue=health.currentValue
      health.setCurrentValue(currentValue+2)
      player.sendMessage(`%nj.message.add_health`)
    }
    if(weight>=23+2*i&&weight<=27+i){
      var facingEntities=player.getEntitiesFromViewDirection({maxDistance:2})
      facingEntities.forEach((hit) => {
        hit.entity.applyDamage(2)
      })
      player.sendMessage(`%nj.message.group_damage`)
    }
    if(weight>=28+i&&weight<=30+2*i){
      var health=target.getComponent("minecraft:health")
      var currentValue=health.currentValue
      health.setCurrentValue(currentValue+3)
      player.sendMessage(`%nj.message.low_attack`)
    }
  }
}

world.afterEvents.playerBreakBlock.subscribe((event)=>{
  const player=event.player
  const target=event.block
  const item=event.itemStackAfterBreak
  const gamemode=player.getGameMode()
  if(gamemode=="Survival"||gamemode=="Adventure"){
    system.run(()=>{
      if(item.hasTag("minecraft:is_tool"||"minecraft:is_spear")==true){
        if(item.hasTag("nj:unstable_tool")==true){
          const durability=item.getComponent("minecraft:durability")
          if(durability.damage+1>=durability.maxDurability){
            player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand)
            player.playSound("random.break")
          }
          else{
            durability.damage += 1
            player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,item)
            toolusing(player, item, false, target, 0)
          }
        }
        else{
          toolusing(player, item, false, target, 0)
        }
      }
    })
  }
})

world.afterEvents.entityHitEntity.subscribe((event)=>{
  const player=event.damagingEntity
  const target=event.hitEntity
  const item=player.getComponent("minecraft:equippable").getEquipment(EquipmentSlot.Mainhand)
  const gamemode=player.getGameMode();
  if(gamemode=="Survival"||gamemode=="Adventure"){
    system.run(()=>{
      if(item.hasTag("minecraft:is_tool")===true||item.hasTag("minecraft:is_spear")===true){
        if(item.hasTag("nj:unstable_tool")==true){
          var durability=item.getComponent("durability")
          if(durability.damage+1>=durability.maxDurability){
            player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand)
            player.playSound("random.break")
          }
          else{
            durability.damage += 1
            player.getComponent("minecraft:equippable").setEquipment(EquipmentSlot.Mainhand,item)
            toolusing(player, item, true, target, 0)
          }
        }
        else{
          toolusing(player, item, true, target, 0)
        }
      }
    })
  }
})


