gdjs.testSceneCode = {};
gdjs.testSceneCode.GDSkeletonMageObjects1= [];
gdjs.testSceneCode.GDSkeletonMageObjects2= [];
gdjs.testSceneCode.GDCyberpunks3Portrait3Objects1= [];
gdjs.testSceneCode.GDCyberpunks3Portrait3Objects2= [];
gdjs.testSceneCode.GDNewSpriteObjects1= [];
gdjs.testSceneCode.GDNewSpriteObjects2= [];
gdjs.testSceneCode.GDInventorySlotEmpty2Objects1= [];
gdjs.testSceneCode.GDInventorySlotEmpty2Objects2= [];
gdjs.testSceneCode.GDNewBBTextObjects1= [];
gdjs.testSceneCode.GDNewBBTextObjects2= [];
gdjs.testSceneCode.GDSpeachObjects1= [];
gdjs.testSceneCode.GDSpeachObjects2= [];
gdjs.testSceneCode.GDGrassAndTreeBackgroundObjects1= [];
gdjs.testSceneCode.GDGrassAndTreeBackgroundObjects2= [];
gdjs.testSceneCode.GDBottleObjects1= [];
gdjs.testSceneCode.GDBottleObjects2= [];
gdjs.testSceneCode.GDGreenBottlePieceObjects1= [];
gdjs.testSceneCode.GDGreenBottlePieceObjects2= [];
gdjs.testSceneCode.GDHandCastingMagicObjects1= [];
gdjs.testSceneCode.GDHandCastingMagicObjects2= [];
gdjs.testSceneCode.GDNuadaObjects1= [];
gdjs.testSceneCode.GDNuadaObjects2= [];
gdjs.testSceneCode.GDRuObjects1= [];
gdjs.testSceneCode.GDRuObjects2= [];
gdjs.testSceneCode.GDBarlorObjects1= [];
gdjs.testSceneCode.GDBarlorObjects2= [];
gdjs.testSceneCode.GDBreathObjects1= [];
gdjs.testSceneCode.GDBreathObjects2= [];
gdjs.testSceneCode.GDMiahaObjects1= [];
gdjs.testSceneCode.GDMiahaObjects2= [];
gdjs.testSceneCode.GDDagdaObjects1= [];
gdjs.testSceneCode.GDDagdaObjects2= [];
gdjs.testSceneCode.GDNameTXTObjects1= [];
gdjs.testSceneCode.GDNameTXTObjects2= [];
gdjs.testSceneCode.GDPortraitObjects1= [];
gdjs.testSceneCode.GDPortraitObjects2= [];
gdjs.testSceneCode.GDQuestTXTObjects1= [];
gdjs.testSceneCode.GDQuestTXTObjects2= [];
gdjs.testSceneCode.GDDialogueTXTObjects1= [];
gdjs.testSceneCode.GDDialogueTXTObjects2= [];
gdjs.testSceneCode.GDDialogueBackgroundObjects1= [];
gdjs.testSceneCode.GDDialogueBackgroundObjects2= [];
gdjs.testSceneCode.GDInventorySlotEmpty2Objects1= [];
gdjs.testSceneCode.GDInventorySlotEmpty2Objects2= [];
gdjs.testSceneCode.GDHandCastingMagicObjects1= [];
gdjs.testSceneCode.GDHandCastingMagicObjects2= [];
gdjs.testSceneCode.GDBlueBottleObjects1= [];
gdjs.testSceneCode.GDBlueBottleObjects2= [];
gdjs.testSceneCode.GDBottle3Objects1= [];
gdjs.testSceneCode.GDBottle3Objects2= [];
gdjs.testSceneCode.GDQuestTextTXTObjects1= [];
gdjs.testSceneCode.GDQuestTextTXTObjects2= [];
gdjs.testSceneCode.GDSwordObjects1= [];
gdjs.testSceneCode.GDSwordObjects2= [];
gdjs.testSceneCode.GDSpearObjects1= [];
gdjs.testSceneCode.GDSpearObjects2= [];
gdjs.testSceneCode.GDNuadaBloodObjects1= [];
gdjs.testSceneCode.GDNuadaBloodObjects2= [];
gdjs.testSceneCode.GDPotItemObjects1= [];
gdjs.testSceneCode.GDPotItemObjects2= [];
gdjs.testSceneCode.GDMilkBottleObjects1= [];
gdjs.testSceneCode.GDMilkBottleObjects2= [];
gdjs.testSceneCode.GDMiachBackgroundObjects1= [];
gdjs.testSceneCode.GDMiachBackgroundObjects2= [];
gdjs.testSceneCode.GDRockObjects1= [];
gdjs.testSceneCode.GDRockObjects2= [];
gdjs.testSceneCode.GDclickbaseObjects1= [];
gdjs.testSceneCode.GDclickbaseObjects2= [];
gdjs.testSceneCode.GDPotObjects1= [];
gdjs.testSceneCode.GDPotObjects2= [];


gdjs.testSceneCode.mapOfGDgdjs_9546testSceneCode_9546GDBottleObjects1ObjectsGDgdjs_9546testSceneCode_9546GDGreenBottlePieceObjects1ObjectsGDgdjs_9546testSceneCode_9546GDHandCastingMagicObjects1Objects = Hashtable.newFrom({"Bottle": gdjs.testSceneCode.GDBottleObjects1, "GreenBottlePiece": gdjs.testSceneCode.GDGreenBottlePieceObjects1, "HandCastingMagic": gdjs.testSceneCode.GDHandCastingMagicObjects1});
gdjs.testSceneCode.mapOfGDgdjs_9546testSceneCode_9546GDInventorySlotEmpty2Objects1Objects = Hashtable.newFrom({"InventorySlotEmpty2": gdjs.testSceneCode.GDInventorySlotEmpty2Objects1});
gdjs.testSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("InventorySlotEmpty2"), gdjs.testSceneCode.GDInventorySlotEmpty2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.testSceneCode.GDInventorySlotEmpty2Objects1.length;i<l;++i) {
    if ( gdjs.testSceneCode.GDInventorySlotEmpty2Objects1[i].getVariableBoolean(gdjs.testSceneCode.GDInventorySlotEmpty2Objects1[i].getVariables().getFromIndex(1), false) ) {
        isConditionTrue_0 = true;
        gdjs.testSceneCode.GDInventorySlotEmpty2Objects1[k] = gdjs.testSceneCode.GDInventorySlotEmpty2Objects1[i];
        ++k;
    }
}
gdjs.testSceneCode.GDInventorySlotEmpty2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.testSceneCode.mapOfGDgdjs_9546testSceneCode_9546GDInventorySlotEmpty2Objects1Objects, 0, 0, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.testSceneCode.GDBottleObjects1 */
/* Reuse gdjs.testSceneCode.GDGreenBottlePieceObjects1 */
/* Reuse gdjs.testSceneCode.GDHandCastingMagicObjects1 */
/* Reuse gdjs.testSceneCode.GDInventorySlotEmpty2Objects1 */
{for(var i = 0, len = gdjs.testSceneCode.GDInventorySlotEmpty2Objects1.length ;i < len;++i) {
    gdjs.testSceneCode.GDInventorySlotEmpty2Objects1[i].setVariableBoolean(gdjs.testSceneCode.GDInventorySlotEmpty2Objects1[i].getVariables().getFromIndex(1), true);
}
}{for(var i = 0, len = gdjs.testSceneCode.GDInventorySlotEmpty2Objects1.length ;i < len;++i) {
    gdjs.testSceneCode.GDInventorySlotEmpty2Objects1[i].returnVariable(gdjs.testSceneCode.GDInventorySlotEmpty2Objects1[i].getVariables().getFromIndex(0)).setString((gdjs.testSceneCode.GDInventorySlotEmpty2Objects1[i].getName()));
}
}{for(var i = 0, len = gdjs.testSceneCode.GDBottleObjects1.length ;i < len;++i) {
    gdjs.testSceneCode.GDBottleObjects1[i].setPosition((( gdjs.testSceneCode.GDInventorySlotEmpty2Objects1.length === 0 ) ? 0 :gdjs.testSceneCode.GDInventorySlotEmpty2Objects1[0].getPointX("")),(( gdjs.testSceneCode.GDInventorySlotEmpty2Objects1.length === 0 ) ? 0 :gdjs.testSceneCode.GDInventorySlotEmpty2Objects1[0].getPointY("")));
}
for(var i = 0, len = gdjs.testSceneCode.GDGreenBottlePieceObjects1.length ;i < len;++i) {
    gdjs.testSceneCode.GDGreenBottlePieceObjects1[i].setPosition((( gdjs.testSceneCode.GDInventorySlotEmpty2Objects1.length === 0 ) ? 0 :gdjs.testSceneCode.GDInventorySlotEmpty2Objects1[0].getPointX("")),(( gdjs.testSceneCode.GDInventorySlotEmpty2Objects1.length === 0 ) ? 0 :gdjs.testSceneCode.GDInventorySlotEmpty2Objects1[0].getPointY("")));
}
for(var i = 0, len = gdjs.testSceneCode.GDHandCastingMagicObjects1.length ;i < len;++i) {
    gdjs.testSceneCode.GDHandCastingMagicObjects1[i].setPosition((( gdjs.testSceneCode.GDInventorySlotEmpty2Objects1.length === 0 ) ? 0 :gdjs.testSceneCode.GDInventorySlotEmpty2Objects1[0].getPointX("")),(( gdjs.testSceneCode.GDInventorySlotEmpty2Objects1.length === 0 ) ? 0 :gdjs.testSceneCode.GDInventorySlotEmpty2Objects1[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.testSceneCode.GDBottleObjects1.length ;i < len;++i) {
    gdjs.testSceneCode.GDBottleObjects1[i].setVariableBoolean(gdjs.testSceneCode.GDBottleObjects1[i].getVariables().get("collected"), true);
}
for(var i = 0, len = gdjs.testSceneCode.GDGreenBottlePieceObjects1.length ;i < len;++i) {
    gdjs.testSceneCode.GDGreenBottlePieceObjects1[i].setVariableBoolean(gdjs.testSceneCode.GDGreenBottlePieceObjects1[i].getVariables().get("collected"), true);
}
for(var i = 0, len = gdjs.testSceneCode.GDHandCastingMagicObjects1.length ;i < len;++i) {
    gdjs.testSceneCode.GDHandCastingMagicObjects1[i].setVariableBoolean(gdjs.testSceneCode.GDHandCastingMagicObjects1[i].getVariables().get("collected"), true);
}
}{for(var i = 0, len = gdjs.testSceneCode.GDBottleObjects1.length ;i < len;++i) {
    gdjs.testSceneCode.GDBottleObjects1[i].setLayer("UI");
}
for(var i = 0, len = gdjs.testSceneCode.GDGreenBottlePieceObjects1.length ;i < len;++i) {
    gdjs.testSceneCode.GDGreenBottlePieceObjects1[i].setLayer("UI");
}
for(var i = 0, len = gdjs.testSceneCode.GDHandCastingMagicObjects1.length ;i < len;++i) {
    gdjs.testSceneCode.GDHandCastingMagicObjects1[i].setLayer("UI");
}
}}

}


};gdjs.testSceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bottle"), gdjs.testSceneCode.GDBottleObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenBottlePiece"), gdjs.testSceneCode.GDGreenBottlePieceObjects1);
gdjs.copyArray(runtimeScene.getObjects("HandCastingMagic"), gdjs.testSceneCode.GDHandCastingMagicObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.testSceneCode.mapOfGDgdjs_9546testSceneCode_9546GDBottleObjects1ObjectsGDgdjs_9546testSceneCode_9546GDGreenBottlePieceObjects1ObjectsGDgdjs_9546testSceneCode_9546GDHandCastingMagicObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.testSceneCode.GDBottleObjects1.length;i<l;++i) {
    if ( gdjs.testSceneCode.GDBottleObjects1[i].getVariableBoolean(gdjs.testSceneCode.GDBottleObjects1[i].getVariables().get("collected"), false) ) {
        isConditionTrue_0 = true;
        gdjs.testSceneCode.GDBottleObjects1[k] = gdjs.testSceneCode.GDBottleObjects1[i];
        ++k;
    }
}
gdjs.testSceneCode.GDBottleObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.testSceneCode.GDGreenBottlePieceObjects1.length;i<l;++i) {
    if ( gdjs.testSceneCode.GDGreenBottlePieceObjects1[i].getVariableBoolean(gdjs.testSceneCode.GDGreenBottlePieceObjects1[i].getVariables().get("collected"), false) ) {
        isConditionTrue_0 = true;
        gdjs.testSceneCode.GDGreenBottlePieceObjects1[k] = gdjs.testSceneCode.GDGreenBottlePieceObjects1[i];
        ++k;
    }
}
gdjs.testSceneCode.GDGreenBottlePieceObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.testSceneCode.GDHandCastingMagicObjects1.length;i<l;++i) {
    if ( gdjs.testSceneCode.GDHandCastingMagicObjects1[i].getVariableBoolean(gdjs.testSceneCode.GDHandCastingMagicObjects1[i].getVariables().get("collected"), false) ) {
        isConditionTrue_0 = true;
        gdjs.testSceneCode.GDHandCastingMagicObjects1[k] = gdjs.testSceneCode.GDHandCastingMagicObjects1[i];
        ++k;
    }
}
gdjs.testSceneCode.GDHandCastingMagicObjects1.length = k;
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.testSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.testSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.testSceneCode.GDSkeletonMageObjects1.length = 0;
gdjs.testSceneCode.GDSkeletonMageObjects2.length = 0;
gdjs.testSceneCode.GDCyberpunks3Portrait3Objects1.length = 0;
gdjs.testSceneCode.GDCyberpunks3Portrait3Objects2.length = 0;
gdjs.testSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.testSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.testSceneCode.GDInventorySlotEmpty2Objects1.length = 0;
gdjs.testSceneCode.GDInventorySlotEmpty2Objects2.length = 0;
gdjs.testSceneCode.GDNewBBTextObjects1.length = 0;
gdjs.testSceneCode.GDNewBBTextObjects2.length = 0;
gdjs.testSceneCode.GDSpeachObjects1.length = 0;
gdjs.testSceneCode.GDSpeachObjects2.length = 0;
gdjs.testSceneCode.GDGrassAndTreeBackgroundObjects1.length = 0;
gdjs.testSceneCode.GDGrassAndTreeBackgroundObjects2.length = 0;
gdjs.testSceneCode.GDBottleObjects1.length = 0;
gdjs.testSceneCode.GDBottleObjects2.length = 0;
gdjs.testSceneCode.GDGreenBottlePieceObjects1.length = 0;
gdjs.testSceneCode.GDGreenBottlePieceObjects2.length = 0;
gdjs.testSceneCode.GDHandCastingMagicObjects1.length = 0;
gdjs.testSceneCode.GDHandCastingMagicObjects2.length = 0;
gdjs.testSceneCode.GDNuadaObjects1.length = 0;
gdjs.testSceneCode.GDNuadaObjects2.length = 0;
gdjs.testSceneCode.GDRuObjects1.length = 0;
gdjs.testSceneCode.GDRuObjects2.length = 0;
gdjs.testSceneCode.GDBarlorObjects1.length = 0;
gdjs.testSceneCode.GDBarlorObjects2.length = 0;
gdjs.testSceneCode.GDBreathObjects1.length = 0;
gdjs.testSceneCode.GDBreathObjects2.length = 0;
gdjs.testSceneCode.GDMiahaObjects1.length = 0;
gdjs.testSceneCode.GDMiahaObjects2.length = 0;
gdjs.testSceneCode.GDDagdaObjects1.length = 0;
gdjs.testSceneCode.GDDagdaObjects2.length = 0;
gdjs.testSceneCode.GDNameTXTObjects1.length = 0;
gdjs.testSceneCode.GDNameTXTObjects2.length = 0;
gdjs.testSceneCode.GDPortraitObjects1.length = 0;
gdjs.testSceneCode.GDPortraitObjects2.length = 0;
gdjs.testSceneCode.GDQuestTXTObjects1.length = 0;
gdjs.testSceneCode.GDQuestTXTObjects2.length = 0;
gdjs.testSceneCode.GDDialogueTXTObjects1.length = 0;
gdjs.testSceneCode.GDDialogueTXTObjects2.length = 0;
gdjs.testSceneCode.GDDialogueBackgroundObjects1.length = 0;
gdjs.testSceneCode.GDDialogueBackgroundObjects2.length = 0;
gdjs.testSceneCode.GDInventorySlotEmpty2Objects1.length = 0;
gdjs.testSceneCode.GDInventorySlotEmpty2Objects2.length = 0;
gdjs.testSceneCode.GDHandCastingMagicObjects1.length = 0;
gdjs.testSceneCode.GDHandCastingMagicObjects2.length = 0;
gdjs.testSceneCode.GDBlueBottleObjects1.length = 0;
gdjs.testSceneCode.GDBlueBottleObjects2.length = 0;
gdjs.testSceneCode.GDBottle3Objects1.length = 0;
gdjs.testSceneCode.GDBottle3Objects2.length = 0;
gdjs.testSceneCode.GDQuestTextTXTObjects1.length = 0;
gdjs.testSceneCode.GDQuestTextTXTObjects2.length = 0;
gdjs.testSceneCode.GDSwordObjects1.length = 0;
gdjs.testSceneCode.GDSwordObjects2.length = 0;
gdjs.testSceneCode.GDSpearObjects1.length = 0;
gdjs.testSceneCode.GDSpearObjects2.length = 0;
gdjs.testSceneCode.GDNuadaBloodObjects1.length = 0;
gdjs.testSceneCode.GDNuadaBloodObjects2.length = 0;
gdjs.testSceneCode.GDPotItemObjects1.length = 0;
gdjs.testSceneCode.GDPotItemObjects2.length = 0;
gdjs.testSceneCode.GDMilkBottleObjects1.length = 0;
gdjs.testSceneCode.GDMilkBottleObjects2.length = 0;
gdjs.testSceneCode.GDMiachBackgroundObjects1.length = 0;
gdjs.testSceneCode.GDMiachBackgroundObjects2.length = 0;
gdjs.testSceneCode.GDRockObjects1.length = 0;
gdjs.testSceneCode.GDRockObjects2.length = 0;
gdjs.testSceneCode.GDclickbaseObjects1.length = 0;
gdjs.testSceneCode.GDclickbaseObjects2.length = 0;
gdjs.testSceneCode.GDPotObjects1.length = 0;
gdjs.testSceneCode.GDPotObjects2.length = 0;

gdjs.testSceneCode.eventsList1(runtimeScene);

return;

}

gdjs['testSceneCode'] = gdjs.testSceneCode;
