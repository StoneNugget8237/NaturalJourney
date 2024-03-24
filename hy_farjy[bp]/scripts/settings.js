import {world,system} from "@minecraft/server";
import { ActionFormData, MessageFormData, ModalFormData } from "@minecraft/server-ui";

function settingmainpage(player){
    var settingmainpageform = new ActionFormData()
    settingmainpageform.title("隐藏之年·更远的旅程 - Addon设置")
    settingmainpageform.body("您可以在这里编辑隐藏之年·更远的旅程Addon的设置")
    settingmainpageform.button("扩展包设置")
    settingmainpageform.show(player).then((a) =>{
        if(a.selection==0){
            extendpack(player)
        }
    })
}
function extendpack(player){
    var IsSCExtActive=world.getDynamicProperty("hy_farjy:enablescexp")
    
    var extendpackform = new ModalFormData()
    extendpackform.title("选择启用的扩展包")
    if(IsSCExtActive==undefined){
        extendpackform.toggle("Stone Craft扩展包", false)
    }
    if(IsSCExtActive==false){
        extendpackform.toggle("Stone Craft扩展包", false)
    }
    if(IsSCExtActive==true){
        extendpackform.toggle("Stone Craft扩展包", true)
    }
    extendpackform.show(player).then((a)=>{
        const [IsSCExtActive] = a.formValues;
        if(IsSCExtActive==true){
            world.setDynamicProperty("hy_farjy:enablescexp",true)
        }
        if(IsSCExtActive==false){
            world.setDynamicProperty("hy_farjy:enablescexp",false)
        }
    })
}

world.beforeEvents.itemUse.subscribe((a)=>{
    if (a.itemStack.typeId == "minecraft:stick") {
        system.run(()=>{
            settingmainpage(a.source)
        })
    }
})