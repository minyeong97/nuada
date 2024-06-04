gdjs.EndSceneCode = {};
gdjs.EndSceneCode.GDDesertBackground2Objects1= [];
gdjs.EndSceneCode.GDDesertBackground2Objects2= [];
gdjs.EndSceneCode.GDNewTextObjects1= [];
gdjs.EndSceneCode.GDNewTextObjects2= [];
gdjs.EndSceneCode.GDNewSpriteObjects1= [];
gdjs.EndSceneCode.GDNewSpriteObjects2= [];
gdjs.EndSceneCode.GDNewSprite2Objects1= [];
gdjs.EndSceneCode.GDNewSprite2Objects2= [];
gdjs.EndSceneCode.GDNuadaObjects1= [];
gdjs.EndSceneCode.GDNuadaObjects2= [];
gdjs.EndSceneCode.GDRuObjects1= [];
gdjs.EndSceneCode.GDRuObjects2= [];
gdjs.EndSceneCode.GDBarlorObjects1= [];
gdjs.EndSceneCode.GDBarlorObjects2= [];
gdjs.EndSceneCode.GDBreathObjects1= [];
gdjs.EndSceneCode.GDBreathObjects2= [];
gdjs.EndSceneCode.GDMiahaObjects1= [];
gdjs.EndSceneCode.GDMiahaObjects2= [];
gdjs.EndSceneCode.GDDagdaObjects1= [];
gdjs.EndSceneCode.GDDagdaObjects2= [];
gdjs.EndSceneCode.GDNameTXTObjects1= [];
gdjs.EndSceneCode.GDNameTXTObjects2= [];
gdjs.EndSceneCode.GDPortraitObjects1= [];
gdjs.EndSceneCode.GDPortraitObjects2= [];
gdjs.EndSceneCode.GDQuestTXTObjects1= [];
gdjs.EndSceneCode.GDQuestTXTObjects2= [];
gdjs.EndSceneCode.GDDialogueTXTObjects1= [];
gdjs.EndSceneCode.GDDialogueTXTObjects2= [];
gdjs.EndSceneCode.GDDialogueBackgroundObjects1= [];
gdjs.EndSceneCode.GDDialogueBackgroundObjects2= [];
gdjs.EndSceneCode.GDInventorySlotEmpty2Objects1= [];
gdjs.EndSceneCode.GDInventorySlotEmpty2Objects2= [];
gdjs.EndSceneCode.GDHandCastingMagicObjects1= [];
gdjs.EndSceneCode.GDHandCastingMagicObjects2= [];
gdjs.EndSceneCode.GDBlueBottleObjects1= [];
gdjs.EndSceneCode.GDBlueBottleObjects2= [];
gdjs.EndSceneCode.GDBottle3Objects1= [];
gdjs.EndSceneCode.GDBottle3Objects2= [];
gdjs.EndSceneCode.GDQuestTextTXTObjects1= [];
gdjs.EndSceneCode.GDQuestTextTXTObjects2= [];
gdjs.EndSceneCode.GDSwordObjects1= [];
gdjs.EndSceneCode.GDSwordObjects2= [];
gdjs.EndSceneCode.GDSpearObjects1= [];
gdjs.EndSceneCode.GDSpearObjects2= [];
gdjs.EndSceneCode.GDNuadaBloodObjects1= [];
gdjs.EndSceneCode.GDNuadaBloodObjects2= [];
gdjs.EndSceneCode.GDPotItemObjects1= [];
gdjs.EndSceneCode.GDPotItemObjects2= [];
gdjs.EndSceneCode.GDMilkBottleObjects1= [];
gdjs.EndSceneCode.GDMilkBottleObjects2= [];
gdjs.EndSceneCode.GDMiachBackgroundObjects1= [];
gdjs.EndSceneCode.GDMiachBackgroundObjects2= [];
gdjs.EndSceneCode.GDRockObjects1= [];
gdjs.EndSceneCode.GDRockObjects2= [];
gdjs.EndSceneCode.GDclickbaseObjects1= [];
gdjs.EndSceneCode.GDclickbaseObjects2= [];
gdjs.EndSceneCode.GDPotObjects1= [];
gdjs.EndSceneCode.GDPotObjects2= [];
gdjs.EndSceneCode.GDNewSpriteObjects1= [];
gdjs.EndSceneCode.GDNewSpriteObjects2= [];
gdjs.EndSceneCode.GDcoverObjects1= [];
gdjs.EndSceneCode.GDcoverObjects2= [];


gdjs.EndSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16341644);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "celtic.mp3", false, 100, 1);
}}

}


};gdjs.EndSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.EndSceneCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.EndSceneCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.EndSceneCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.EndSceneCode.GDNewTextObjects1[i].getBehavior("Tween").addObjectPositionYTween2("creditScroll", -(4100), "linear", 90, false);
}
}{for(var i = 0, len = gdjs.EndSceneCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.EndSceneCode.GDNewSprite2Objects1[i].getBehavior("Opacity").setOpacity(130);
}
}
{ //Subevents
gdjs.EndSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.EndSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndSceneCode.GDDesertBackground2Objects1.length = 0;
gdjs.EndSceneCode.GDDesertBackground2Objects2.length = 0;
gdjs.EndSceneCode.GDNewTextObjects1.length = 0;
gdjs.EndSceneCode.GDNewTextObjects2.length = 0;
gdjs.EndSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.EndSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.EndSceneCode.GDNewSprite2Objects1.length = 0;
gdjs.EndSceneCode.GDNewSprite2Objects2.length = 0;
gdjs.EndSceneCode.GDNuadaObjects1.length = 0;
gdjs.EndSceneCode.GDNuadaObjects2.length = 0;
gdjs.EndSceneCode.GDRuObjects1.length = 0;
gdjs.EndSceneCode.GDRuObjects2.length = 0;
gdjs.EndSceneCode.GDBarlorObjects1.length = 0;
gdjs.EndSceneCode.GDBarlorObjects2.length = 0;
gdjs.EndSceneCode.GDBreathObjects1.length = 0;
gdjs.EndSceneCode.GDBreathObjects2.length = 0;
gdjs.EndSceneCode.GDMiahaObjects1.length = 0;
gdjs.EndSceneCode.GDMiahaObjects2.length = 0;
gdjs.EndSceneCode.GDDagdaObjects1.length = 0;
gdjs.EndSceneCode.GDDagdaObjects2.length = 0;
gdjs.EndSceneCode.GDNameTXTObjects1.length = 0;
gdjs.EndSceneCode.GDNameTXTObjects2.length = 0;
gdjs.EndSceneCode.GDPortraitObjects1.length = 0;
gdjs.EndSceneCode.GDPortraitObjects2.length = 0;
gdjs.EndSceneCode.GDQuestTXTObjects1.length = 0;
gdjs.EndSceneCode.GDQuestTXTObjects2.length = 0;
gdjs.EndSceneCode.GDDialogueTXTObjects1.length = 0;
gdjs.EndSceneCode.GDDialogueTXTObjects2.length = 0;
gdjs.EndSceneCode.GDDialogueBackgroundObjects1.length = 0;
gdjs.EndSceneCode.GDDialogueBackgroundObjects2.length = 0;
gdjs.EndSceneCode.GDInventorySlotEmpty2Objects1.length = 0;
gdjs.EndSceneCode.GDInventorySlotEmpty2Objects2.length = 0;
gdjs.EndSceneCode.GDHandCastingMagicObjects1.length = 0;
gdjs.EndSceneCode.GDHandCastingMagicObjects2.length = 0;
gdjs.EndSceneCode.GDBlueBottleObjects1.length = 0;
gdjs.EndSceneCode.GDBlueBottleObjects2.length = 0;
gdjs.EndSceneCode.GDBottle3Objects1.length = 0;
gdjs.EndSceneCode.GDBottle3Objects2.length = 0;
gdjs.EndSceneCode.GDQuestTextTXTObjects1.length = 0;
gdjs.EndSceneCode.GDQuestTextTXTObjects2.length = 0;
gdjs.EndSceneCode.GDSwordObjects1.length = 0;
gdjs.EndSceneCode.GDSwordObjects2.length = 0;
gdjs.EndSceneCode.GDSpearObjects1.length = 0;
gdjs.EndSceneCode.GDSpearObjects2.length = 0;
gdjs.EndSceneCode.GDNuadaBloodObjects1.length = 0;
gdjs.EndSceneCode.GDNuadaBloodObjects2.length = 0;
gdjs.EndSceneCode.GDPotItemObjects1.length = 0;
gdjs.EndSceneCode.GDPotItemObjects2.length = 0;
gdjs.EndSceneCode.GDMilkBottleObjects1.length = 0;
gdjs.EndSceneCode.GDMilkBottleObjects2.length = 0;
gdjs.EndSceneCode.GDMiachBackgroundObjects1.length = 0;
gdjs.EndSceneCode.GDMiachBackgroundObjects2.length = 0;
gdjs.EndSceneCode.GDRockObjects1.length = 0;
gdjs.EndSceneCode.GDRockObjects2.length = 0;
gdjs.EndSceneCode.GDclickbaseObjects1.length = 0;
gdjs.EndSceneCode.GDclickbaseObjects2.length = 0;
gdjs.EndSceneCode.GDPotObjects1.length = 0;
gdjs.EndSceneCode.GDPotObjects2.length = 0;
gdjs.EndSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.EndSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.EndSceneCode.GDcoverObjects1.length = 0;
gdjs.EndSceneCode.GDcoverObjects2.length = 0;

gdjs.EndSceneCode.eventsList1(runtimeScene);

return;

}

gdjs['EndSceneCode'] = gdjs.EndSceneCode;
