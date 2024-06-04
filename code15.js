gdjs.startSceneCode = {};
gdjs.startSceneCode.GDDesertBackground2Objects1= [];
gdjs.startSceneCode.GDDesertBackground2Objects2= [];
gdjs.startSceneCode.GDNewTextObjects1= [];
gdjs.startSceneCode.GDNewTextObjects2= [];
gdjs.startSceneCode.GDBlackSpaceObjects1= [];
gdjs.startSceneCode.GDBlackSpaceObjects2= [];
gdjs.startSceneCode.GDNewSpriteObjects1= [];
gdjs.startSceneCode.GDNewSpriteObjects2= [];
gdjs.startSceneCode.GDNuadaObjects1= [];
gdjs.startSceneCode.GDNuadaObjects2= [];
gdjs.startSceneCode.GDRuObjects1= [];
gdjs.startSceneCode.GDRuObjects2= [];
gdjs.startSceneCode.GDBarlorObjects1= [];
gdjs.startSceneCode.GDBarlorObjects2= [];
gdjs.startSceneCode.GDBreathObjects1= [];
gdjs.startSceneCode.GDBreathObjects2= [];
gdjs.startSceneCode.GDMiahaObjects1= [];
gdjs.startSceneCode.GDMiahaObjects2= [];
gdjs.startSceneCode.GDDagdaObjects1= [];
gdjs.startSceneCode.GDDagdaObjects2= [];
gdjs.startSceneCode.GDNameTXTObjects1= [];
gdjs.startSceneCode.GDNameTXTObjects2= [];
gdjs.startSceneCode.GDPortraitObjects1= [];
gdjs.startSceneCode.GDPortraitObjects2= [];
gdjs.startSceneCode.GDQuestTXTObjects1= [];
gdjs.startSceneCode.GDQuestTXTObjects2= [];
gdjs.startSceneCode.GDDialogueTXTObjects1= [];
gdjs.startSceneCode.GDDialogueTXTObjects2= [];
gdjs.startSceneCode.GDDialogueBackgroundObjects1= [];
gdjs.startSceneCode.GDDialogueBackgroundObjects2= [];
gdjs.startSceneCode.GDInventorySlotEmpty2Objects1= [];
gdjs.startSceneCode.GDInventorySlotEmpty2Objects2= [];
gdjs.startSceneCode.GDHandCastingMagicObjects1= [];
gdjs.startSceneCode.GDHandCastingMagicObjects2= [];
gdjs.startSceneCode.GDBlueBottleObjects1= [];
gdjs.startSceneCode.GDBlueBottleObjects2= [];
gdjs.startSceneCode.GDBottle3Objects1= [];
gdjs.startSceneCode.GDBottle3Objects2= [];
gdjs.startSceneCode.GDQuestTextTXTObjects1= [];
gdjs.startSceneCode.GDQuestTextTXTObjects2= [];
gdjs.startSceneCode.GDSwordObjects1= [];
gdjs.startSceneCode.GDSwordObjects2= [];
gdjs.startSceneCode.GDSpearObjects1= [];
gdjs.startSceneCode.GDSpearObjects2= [];
gdjs.startSceneCode.GDNuadaBloodObjects1= [];
gdjs.startSceneCode.GDNuadaBloodObjects2= [];
gdjs.startSceneCode.GDPotItemObjects1= [];
gdjs.startSceneCode.GDPotItemObjects2= [];
gdjs.startSceneCode.GDMilkBottleObjects1= [];
gdjs.startSceneCode.GDMilkBottleObjects2= [];
gdjs.startSceneCode.GDMiachBackgroundObjects1= [];
gdjs.startSceneCode.GDMiachBackgroundObjects2= [];
gdjs.startSceneCode.GDRockObjects1= [];
gdjs.startSceneCode.GDRockObjects2= [];
gdjs.startSceneCode.GDclickbaseObjects1= [];
gdjs.startSceneCode.GDclickbaseObjects2= [];
gdjs.startSceneCode.GDPotObjects1= [];
gdjs.startSceneCode.GDPotObjects2= [];
gdjs.startSceneCode.GDNewSpriteObjects1= [];
gdjs.startSceneCode.GDNewSpriteObjects2= [];
gdjs.startSceneCode.GDcoverObjects1= [];
gdjs.startSceneCode.GDcoverObjects2= [];


gdjs.startSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16318908);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "celtic.mp3", true, 100, 1);
}}

}


};gdjs.startSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackSpace"), gdjs.startSceneCode.GDBlackSpaceObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.startSceneCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.startSceneCode.GDcoverObjects1);
{for(var i = 0, len = gdjs.startSceneCode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.startSceneCode.GDcoverObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.startSceneCode.GDBlackSpaceObjects1.length ;i < len;++i) {
    gdjs.startSceneCode.GDBlackSpaceObjects1[i].getBehavior("Opacity").setOpacity(130);
}
}{for(var i = 0, len = gdjs.startSceneCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.startSceneCode.GDNewTextObjects1[i].getBehavior("Tween").addObjectPositionYTween2("creditScroll", -(2100), "linear", 50, false);
}
}
{ //Subevents
gdjs.startSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.startSceneCode.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startSceneCode.GDNewTextObjects1.length;i<l;++i) {
    if ( gdjs.startSceneCode.GDNewTextObjects1[i].getBehavior("Tween").hasFinished("creditScroll") ) {
        isConditionTrue_0 = true;
        gdjs.startSceneCode.GDNewTextObjects1[k] = gdjs.startSceneCode.GDNewTextObjects1[i];
        ++k;
    }
}
gdjs.startSceneCode.GDNewTextObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("QuestTextTXT"), gdjs.startSceneCode.GDQuestTextTXTObjects1);
{for(var i = 0, len = gdjs.startSceneCode.GDQuestTextTXTObjects1.length ;i < len;++i) {
    gdjs.startSceneCode.GDQuestTextTXTObjects1[i].setBBText("클릭으로 넘어가기");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.startSceneCode.GDcoverObjects1);
{for(var i = 0, len = gdjs.startSceneCode.GDcoverObjects1.length ;i < len;++i) {
    gdjs.startSceneCode.GDcoverObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeOut", 255, "linear", 3, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("cover"), gdjs.startSceneCode.GDcoverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startSceneCode.GDcoverObjects1.length;i<l;++i) {
    if ( gdjs.startSceneCode.GDcoverObjects1[i].getBehavior("Tween").hasFinished("FadeOut") ) {
        isConditionTrue_0 = true;
        gdjs.startSceneCode.GDcoverObjects1[k] = gdjs.startSceneCode.GDcoverObjects1[i];
        ++k;
    }
}
gdjs.startSceneCode.GDcoverObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene2_", false);
}}

}


};

gdjs.startSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startSceneCode.GDDesertBackground2Objects1.length = 0;
gdjs.startSceneCode.GDDesertBackground2Objects2.length = 0;
gdjs.startSceneCode.GDNewTextObjects1.length = 0;
gdjs.startSceneCode.GDNewTextObjects2.length = 0;
gdjs.startSceneCode.GDBlackSpaceObjects1.length = 0;
gdjs.startSceneCode.GDBlackSpaceObjects2.length = 0;
gdjs.startSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.startSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.startSceneCode.GDNuadaObjects1.length = 0;
gdjs.startSceneCode.GDNuadaObjects2.length = 0;
gdjs.startSceneCode.GDRuObjects1.length = 0;
gdjs.startSceneCode.GDRuObjects2.length = 0;
gdjs.startSceneCode.GDBarlorObjects1.length = 0;
gdjs.startSceneCode.GDBarlorObjects2.length = 0;
gdjs.startSceneCode.GDBreathObjects1.length = 0;
gdjs.startSceneCode.GDBreathObjects2.length = 0;
gdjs.startSceneCode.GDMiahaObjects1.length = 0;
gdjs.startSceneCode.GDMiahaObjects2.length = 0;
gdjs.startSceneCode.GDDagdaObjects1.length = 0;
gdjs.startSceneCode.GDDagdaObjects2.length = 0;
gdjs.startSceneCode.GDNameTXTObjects1.length = 0;
gdjs.startSceneCode.GDNameTXTObjects2.length = 0;
gdjs.startSceneCode.GDPortraitObjects1.length = 0;
gdjs.startSceneCode.GDPortraitObjects2.length = 0;
gdjs.startSceneCode.GDQuestTXTObjects1.length = 0;
gdjs.startSceneCode.GDQuestTXTObjects2.length = 0;
gdjs.startSceneCode.GDDialogueTXTObjects1.length = 0;
gdjs.startSceneCode.GDDialogueTXTObjects2.length = 0;
gdjs.startSceneCode.GDDialogueBackgroundObjects1.length = 0;
gdjs.startSceneCode.GDDialogueBackgroundObjects2.length = 0;
gdjs.startSceneCode.GDInventorySlotEmpty2Objects1.length = 0;
gdjs.startSceneCode.GDInventorySlotEmpty2Objects2.length = 0;
gdjs.startSceneCode.GDHandCastingMagicObjects1.length = 0;
gdjs.startSceneCode.GDHandCastingMagicObjects2.length = 0;
gdjs.startSceneCode.GDBlueBottleObjects1.length = 0;
gdjs.startSceneCode.GDBlueBottleObjects2.length = 0;
gdjs.startSceneCode.GDBottle3Objects1.length = 0;
gdjs.startSceneCode.GDBottle3Objects2.length = 0;
gdjs.startSceneCode.GDQuestTextTXTObjects1.length = 0;
gdjs.startSceneCode.GDQuestTextTXTObjects2.length = 0;
gdjs.startSceneCode.GDSwordObjects1.length = 0;
gdjs.startSceneCode.GDSwordObjects2.length = 0;
gdjs.startSceneCode.GDSpearObjects1.length = 0;
gdjs.startSceneCode.GDSpearObjects2.length = 0;
gdjs.startSceneCode.GDNuadaBloodObjects1.length = 0;
gdjs.startSceneCode.GDNuadaBloodObjects2.length = 0;
gdjs.startSceneCode.GDPotItemObjects1.length = 0;
gdjs.startSceneCode.GDPotItemObjects2.length = 0;
gdjs.startSceneCode.GDMilkBottleObjects1.length = 0;
gdjs.startSceneCode.GDMilkBottleObjects2.length = 0;
gdjs.startSceneCode.GDMiachBackgroundObjects1.length = 0;
gdjs.startSceneCode.GDMiachBackgroundObjects2.length = 0;
gdjs.startSceneCode.GDRockObjects1.length = 0;
gdjs.startSceneCode.GDRockObjects2.length = 0;
gdjs.startSceneCode.GDclickbaseObjects1.length = 0;
gdjs.startSceneCode.GDclickbaseObjects2.length = 0;
gdjs.startSceneCode.GDPotObjects1.length = 0;
gdjs.startSceneCode.GDPotObjects2.length = 0;
gdjs.startSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.startSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.startSceneCode.GDcoverObjects1.length = 0;
gdjs.startSceneCode.GDcoverObjects2.length = 0;

gdjs.startSceneCode.eventsList1(runtimeScene);

return;

}

gdjs['startSceneCode'] = gdjs.startSceneCode;
