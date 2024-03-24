import {world} from "@minecraft/server";
import "settings.js"

world.beforeEvents.itemUse.subscribe((a)=> {
    const player = a.source;
    //铜币奖券
    if(a.itemStack.typeId=="hy_farjy:copper_coin_lottery"){
        var weight = Math.round(Math.random() *10);
    player.runCommandAsync("clear @s hy_farjy:copper_coin_lottery -1 1")
    if (weight==0){
        player.runCommandAsync("give @s hy:copper_coin 15");
        player.sendMessage("恭喜您，获得了奖品§c『铜币』§r*15")
    }
    else if (weight==1){
        player.runCommandAsync("give @s hy:copper_coin 16");
        player.sendMessage("恭喜您，获得了奖品§c『铜币』§r*16")
    }
    else if (weight==2){
        player.runCommandAsync("give @s hy:copper_coin 17");
        player.sendMessage("恭喜您，获得了奖品§c『铜币』§r*17")
    }
    else if (weight==3){
        player.runCommandAsync("give @s hy:copper_coin 18");
        player.sendMessage("恭喜您，获得了奖品§c『铜币』§r*18")
    }
    else if (weight==4){
        player.runCommandAsync("give @s hy:copper_coin 19");
        player.sendMessage("恭喜您，获得了奖品§c『铜币』§r*19")
    }
    else if (weight==5){
        player.runCommandAsync("give @s hy:copper_coin 20");
        player.sendMessage("恭喜您，获得了奖品§c『铜币』§r*20")
    }
    else if (weight==6){
        player.runCommandAsync("give @s hy:copper_coin 21");
        player.sendMessage("恭喜您，获得了奖品§c『铜币』§r*21")
    }
    else if (weight==7){
        player.runCommandAsync("give @s hy:copper_coin 22");
        player.sendMessage("恭喜您，获得了奖品§c『铜币』§r*22")
    }
    else if (weight==8){
        player.runCommandAsync("give @s hy:copper_coin 23");
        player.sendMessage("恭喜您，获得了奖品§c『铜币』§r*23")
    }
    else if (weight==9){
        player.runCommandAsync("give @s hy:copper_coin 24");
        player.sendMessage("恭喜您，获得了奖品§c『铜币』§r*24")
    }
    else{
        player.runCommandAsync("give @s hy:copper_coin 25");
        player.sendMessage("恭喜您，获得了奖品§c『铜币』§r*25")
    }
    }
    //钻石币奖券
    if(a.itemStack.typeId=="hy_farjy:diamond_coin_lottery"){
        var weight = Math.round(Math.random() *2);
    player.runCommandAsync("clear @s hy_farjy:diamond_coin_lottery -1 1")
    if (weight==0){
        player.runCommandAsync("give @s hy:diamond_coin 2");
        player.sendMessage("恭喜您，获得了奖品§b『钻石币』§r*2")
    }
    else if (weight==1){
        player.runCommandAsync("give @s hy:diamond_coin 3");
        player.sendMessage("恭喜您，获得了奖品§b『钻石币』§r*3")
    }
    else{
        player.runCommandAsync("give @s hy:diamond_coin 4");
        player.sendMessage("恭喜您，获得了奖品§b『钻石币』§r*4")
    }
    }
    //金币奖券
    if(a.itemStack.typeId=="hy_farjy:gold_coin_lottery"){
        var weight = Math.round(Math.random() *7);
    player.runCommandAsync("clear @s hy_farjy:gold_coin_lottery -1 1")
    if (weight==0){
        player.runCommandAsync("give @s hy:gold_coin 17");
        player.sendMessage("恭喜您，获得了奖品§e『金币』§r*17")
    }
    else if (weight==1){
        player.runCommandAsync("give @s hy:gold_coin 18");
        player.sendMessage("恭喜您，获得了奖品§e『金币』§r*18")
    }
    else if (weight==2){
        player.runCommandAsync("give @s hy:gold_coin 19");
        player.sendMessage("恭喜您，获得了奖品§e『金币』§r*19")
    }
    else if (weight==3){
        player.runCommandAsync("give @s hy:gold_coin 20");
        player.sendMessage("恭喜您，获得了奖品§e『金币』§r*20")
    }
    else if (weight==4){
        player.runCommandAsync("give @s hy:gold_coin 21");
        player.sendMessage("恭喜您，获得了奖品§e『金币』§r*21")
    }
    else if (weight==5){
        player.runCommandAsync("give @s hy:gold_coin 22");
        player.sendMessage("恭喜您，获得了奖品§e『金币』§r*22")
    }
    else if (weight==6){
        player.runCommandAsync("give @s hy:gold_coin 23");
        player.sendMessage("恭喜您，获得了奖品§e『金币』§r*23")
    }
    else{
        player.runCommandAsync("give @s hy:gold_coin 24");
        player.sendMessage("恭喜您，获得了奖品§e『金币』§r*24")
    }
    }
    //石币奖券
    if(a.itemStack.typeId=="hy_farjy:stone_coin_lottery"){
        if(world.getDynamicProperty("hy_farjy:enablescexp")==true){
            var weight = Math.round(Math.random() *14);
            player.runCommandAsync("clear @s hy_farjy:stone_coin_lottery -1 1")
            if (weight==0){
                player.runCommandAsync("give @s sc:stone_coin 50");
                player.sendMessage("恭喜您，获得了奖品§8『石币』§r*50")
            }
            else if (weight==1){
                player.runCommandAsync("give @s sc:stone_coin 51");
                player.sendMessage("恭喜您，获得了奖品§8『石币』§r*51")
            }
            else if (weight==2){
                player.runCommandAsync("give @s sc:stone_coin 52");
                player.sendMessage("恭喜您，获得了奖品§8『石币』§r*52")
            }
            else if (weight==3){
                player.runCommandAsync("give @s sc:stone_coin 53");
                player.sendMessage("恭喜您，获得了奖品§8『石币』§r*53")
            }
            else if (weight==4){
                player.runCommandAsync("give @s sc:stone_coin 54");
                player.sendMessage("恭喜您，获得了奖品§8『石币』§r*54")
            }
            else if (weight==5){
                player.runCommandAsync("give @s sc:stone_coin 55");
                player.sendMessage("恭喜您，获得了奖品§8『石币』§r*55")
            }
            else if (weight==6){
                player.runCommandAsync("give @s sc:stone_coin 56");
                player.sendMessage("恭喜您，获得了奖品§8『石币』§r*56")
            }
            else if (weight==7){
                player.runCommandAsync("give @s sc:stone_coin 57");
                player.sendMessage("恭喜您，获得了奖品§8『石币』§r*57")
            }
            else if (weight==8){
                player.runCommandAsync("give @s sc:stone_coin 58");
                player.sendMessage("恭喜您，获得了奖品§8『石币』§r*58")
            }
            else if (weight==9){
                player.runCommandAsync("give @s sc:stone_coin 59");
                player.sendMessage("恭喜您，获得了奖品§8『石币』§r*59")
            }
            else if (weight==10){
                player.runCommandAsync("give @s sc:stone_coin 60");
                player.sendMessage("恭喜您，获得了奖品§8『石币』§r*60")
            }
            else if (weight==11){
                player.runCommandAsync("give @s sc:stone_coin 61");
                player.sendMessage("恭喜您，获得了奖品§8『石币』§r*61")
            }
            else if (weight==12){
                player.runCommandAsync("give @s sc:stone_coin 62");
                player.sendMessage("恭喜您，获得了奖品§8『石币』§r*62")
            }
            else if (weight==13){
                player.runCommandAsync("give @s sc:stone_coin 63");
                player.sendMessage("恭喜您，获得了奖品§8『石币』§r*63")
            }
            else{
                player.runCommandAsync("give @s sc:stone_coin 64");
                player.sendMessage("恭喜您，获得了奖品§8『石币』§r*64")
            }
        }
        if(world.getDynamicProperty("hy_farjy:enablescexp")==false){
            player.sendMessage("§c[隐藏之年·更远的旅程]“Stone Craft扩展包暂未启用，无法使用此物品，请前往Addon设置查看详情”\n若问题仍然存在，请前往隐藏之年交流圈向我们提出反馈")
        }
    }
    //绿宝石奖券
    if(a.itemStack.typeId=="hy_farjy:emerald_lottery"){
        var weight = Math.round(Math.random() *6);
    player.runCommandAsync("clear @s hy_farjy:emerald_lottery -1 1")
    if (weight==0){
        player.runCommandAsync("give @s minecraft:emerald 17");
        player.sendMessage("恭喜您，获得了奖品§a『绿宝石』§r*17")
    }
    else if (weight==1){
        player.runCommandAsync("give @s minecraft:emerald 18");
        player.sendMessage("恭喜您，获得了奖品§a『绿宝石』§r*18")
    }
    else if (weight==2){
        player.runCommandAsync("give @s minecraft:emerald 19");
        player.sendMessage("恭喜您，获得了奖品§a『绿宝石』§r*19")
    }
    else if (weight==3){
        player.runCommandAsync("give @s minecraft:emerald 20");
        player.sendMessage("恭喜您，获得了奖品§a『绿宝石』§r*20")
    }
    else if (weight==4){
        player.runCommandAsync("give @s minecraft:emerald 21");
        player.sendMessage("恭喜您，获得了奖品§a『绿宝石』§r*21")
    }
    else if (weight==5){
        player.runCommandAsync("give @s minecraft:emerald 22");
        player.sendMessage("恭喜您，获得了奖品§a『绿宝石』§r*22")
    }
    else{
        player.runCommandAsync("give @s minecraft:emerald 23");
        player.sendMessage("恭喜您，获得了奖品§a『绿宝石』§r*23")
    }
    }
})

