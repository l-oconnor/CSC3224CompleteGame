gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDPlayerObjects1= [];
gdjs.Game_32OverCode.GDPlayerObjects2= [];
gdjs.Game_32OverCode.GDSmallBridgeObjects1= [];
gdjs.Game_32OverCode.GDSmallBridgeObjects2= [];
gdjs.Game_32OverCode.GDCoinObjects1= [];
gdjs.Game_32OverCode.GDCoinObjects2= [];
gdjs.Game_32OverCode.GDKeyObjects1= [];
gdjs.Game_32OverCode.GDKeyObjects2= [];
gdjs.Game_32OverCode.GDLeftObjects1= [];
gdjs.Game_32OverCode.GDLeftObjects2= [];
gdjs.Game_32OverCode.GDRightObjects1= [];
gdjs.Game_32OverCode.GDRightObjects2= [];
gdjs.Game_32OverCode.GDFlagObjects1= [];
gdjs.Game_32OverCode.GDFlagObjects2= [];
gdjs.Game_32OverCode.GDExitObjects1= [];
gdjs.Game_32OverCode.GDExitObjects2= [];
gdjs.Game_32OverCode.GDArrowSignObjects1= [];
gdjs.Game_32OverCode.GDArrowSignObjects2= [];
gdjs.Game_32OverCode.GDDangerObjects1= [];
gdjs.Game_32OverCode.GDDangerObjects2= [];
gdjs.Game_32OverCode.GDLaserObjects1= [];
gdjs.Game_32OverCode.GDLaserObjects2= [];
gdjs.Game_32OverCode.GDDoorObjects1= [];
gdjs.Game_32OverCode.GDDoorObjects2= [];
gdjs.Game_32OverCode.GDDoorErrorObjects1= [];
gdjs.Game_32OverCode.GDDoorErrorObjects2= [];
gdjs.Game_32OverCode.GDCheatTextObjects1= [];
gdjs.Game_32OverCode.GDCheatTextObjects2= [];
gdjs.Game_32OverCode.GDSoundObjects1= [];
gdjs.Game_32OverCode.GDSoundObjects2= [];
gdjs.Game_32OverCode.GDMusicObjects1= [];
gdjs.Game_32OverCode.GDMusicObjects2= [];
gdjs.Game_32OverCode.GDUFOObjects1= [];
gdjs.Game_32OverCode.GDUFOObjects2= [];
gdjs.Game_32OverCode.GDUFO_95RangeObjects1= [];
gdjs.Game_32OverCode.GDUFO_95RangeObjects2= [];
gdjs.Game_32OverCode.GDTimerObjects1= [];
gdjs.Game_32OverCode.GDTimerObjects2= [];
gdjs.Game_32OverCode.GDScoreObjects1= [];
gdjs.Game_32OverCode.GDScoreObjects2= [];
gdjs.Game_32OverCode.GDHealthObjects1= [];
gdjs.Game_32OverCode.GDHealthObjects2= [];
gdjs.Game_32OverCode.GDFPSObjects1= [];
gdjs.Game_32OverCode.GDFPSObjects2= [];
gdjs.Game_32OverCode.GDDeveloperToolsObjects1= [];
gdjs.Game_32OverCode.GDDeveloperToolsObjects2= [];
gdjs.Game_32OverCode.GDObjectCounterObjects1= [];
gdjs.Game_32OverCode.GDObjectCounterObjects2= [];
gdjs.Game_32OverCode.GDTimePlayingObjects1= [];
gdjs.Game_32OverCode.GDTimePlayingObjects2= [];
gdjs.Game_32OverCode.GDGameOverTextObjects1= [];
gdjs.Game_32OverCode.GDGameOverTextObjects2= [];
gdjs.Game_32OverCode.GDOuchObjects1= [];
gdjs.Game_32OverCode.GDOuchObjects2= [];
gdjs.Game_32OverCode.GDBackgroundObjects1= [];
gdjs.Game_32OverCode.GDBackgroundObjects2= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Sounds")) == 1;
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Sounds\\you_lose.ogg", false, 100, 1);
}}

}


};gdjs.Game_32OverCode.eventsList1 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_32OverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", true);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDPlayerObjects1.length = 0;
gdjs.Game_32OverCode.GDPlayerObjects2.length = 0;
gdjs.Game_32OverCode.GDSmallBridgeObjects1.length = 0;
gdjs.Game_32OverCode.GDSmallBridgeObjects2.length = 0;
gdjs.Game_32OverCode.GDCoinObjects1.length = 0;
gdjs.Game_32OverCode.GDCoinObjects2.length = 0;
gdjs.Game_32OverCode.GDKeyObjects1.length = 0;
gdjs.Game_32OverCode.GDKeyObjects2.length = 0;
gdjs.Game_32OverCode.GDLeftObjects1.length = 0;
gdjs.Game_32OverCode.GDLeftObjects2.length = 0;
gdjs.Game_32OverCode.GDRightObjects1.length = 0;
gdjs.Game_32OverCode.GDRightObjects2.length = 0;
gdjs.Game_32OverCode.GDFlagObjects1.length = 0;
gdjs.Game_32OverCode.GDFlagObjects2.length = 0;
gdjs.Game_32OverCode.GDExitObjects1.length = 0;
gdjs.Game_32OverCode.GDExitObjects2.length = 0;
gdjs.Game_32OverCode.GDArrowSignObjects1.length = 0;
gdjs.Game_32OverCode.GDArrowSignObjects2.length = 0;
gdjs.Game_32OverCode.GDDangerObjects1.length = 0;
gdjs.Game_32OverCode.GDDangerObjects2.length = 0;
gdjs.Game_32OverCode.GDLaserObjects1.length = 0;
gdjs.Game_32OverCode.GDLaserObjects2.length = 0;
gdjs.Game_32OverCode.GDDoorObjects1.length = 0;
gdjs.Game_32OverCode.GDDoorObjects2.length = 0;
gdjs.Game_32OverCode.GDDoorErrorObjects1.length = 0;
gdjs.Game_32OverCode.GDDoorErrorObjects2.length = 0;
gdjs.Game_32OverCode.GDCheatTextObjects1.length = 0;
gdjs.Game_32OverCode.GDCheatTextObjects2.length = 0;
gdjs.Game_32OverCode.GDSoundObjects1.length = 0;
gdjs.Game_32OverCode.GDSoundObjects2.length = 0;
gdjs.Game_32OverCode.GDMusicObjects1.length = 0;
gdjs.Game_32OverCode.GDMusicObjects2.length = 0;
gdjs.Game_32OverCode.GDUFOObjects1.length = 0;
gdjs.Game_32OverCode.GDUFOObjects2.length = 0;
gdjs.Game_32OverCode.GDUFO_95RangeObjects1.length = 0;
gdjs.Game_32OverCode.GDUFO_95RangeObjects2.length = 0;
gdjs.Game_32OverCode.GDTimerObjects1.length = 0;
gdjs.Game_32OverCode.GDTimerObjects2.length = 0;
gdjs.Game_32OverCode.GDScoreObjects1.length = 0;
gdjs.Game_32OverCode.GDScoreObjects2.length = 0;
gdjs.Game_32OverCode.GDHealthObjects1.length = 0;
gdjs.Game_32OverCode.GDHealthObjects2.length = 0;
gdjs.Game_32OverCode.GDFPSObjects1.length = 0;
gdjs.Game_32OverCode.GDFPSObjects2.length = 0;
gdjs.Game_32OverCode.GDDeveloperToolsObjects1.length = 0;
gdjs.Game_32OverCode.GDDeveloperToolsObjects2.length = 0;
gdjs.Game_32OverCode.GDObjectCounterObjects1.length = 0;
gdjs.Game_32OverCode.GDObjectCounterObjects2.length = 0;
gdjs.Game_32OverCode.GDTimePlayingObjects1.length = 0;
gdjs.Game_32OverCode.GDTimePlayingObjects2.length = 0;
gdjs.Game_32OverCode.GDGameOverTextObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverTextObjects2.length = 0;
gdjs.Game_32OverCode.GDOuchObjects1.length = 0;
gdjs.Game_32OverCode.GDOuchObjects2.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects2.length = 0;

gdjs.Game_32OverCode.eventsList1(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
