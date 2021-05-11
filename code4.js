gdjs.Winner_33Code = {};
gdjs.Winner_33Code.GDPlayerObjects1= [];
gdjs.Winner_33Code.GDPlayerObjects2= [];
gdjs.Winner_33Code.GDSmallBridgeObjects1= [];
gdjs.Winner_33Code.GDSmallBridgeObjects2= [];
gdjs.Winner_33Code.GDCoinObjects1= [];
gdjs.Winner_33Code.GDCoinObjects2= [];
gdjs.Winner_33Code.GDKeyObjects1= [];
gdjs.Winner_33Code.GDKeyObjects2= [];
gdjs.Winner_33Code.GDLeftObjects1= [];
gdjs.Winner_33Code.GDLeftObjects2= [];
gdjs.Winner_33Code.GDRightObjects1= [];
gdjs.Winner_33Code.GDRightObjects2= [];
gdjs.Winner_33Code.GDFlagObjects1= [];
gdjs.Winner_33Code.GDFlagObjects2= [];
gdjs.Winner_33Code.GDExitObjects1= [];
gdjs.Winner_33Code.GDExitObjects2= [];
gdjs.Winner_33Code.GDArrowSignObjects1= [];
gdjs.Winner_33Code.GDArrowSignObjects2= [];
gdjs.Winner_33Code.GDDangerObjects1= [];
gdjs.Winner_33Code.GDDangerObjects2= [];
gdjs.Winner_33Code.GDLaserObjects1= [];
gdjs.Winner_33Code.GDLaserObjects2= [];
gdjs.Winner_33Code.GDDoorObjects1= [];
gdjs.Winner_33Code.GDDoorObjects2= [];
gdjs.Winner_33Code.GDDoorErrorObjects1= [];
gdjs.Winner_33Code.GDDoorErrorObjects2= [];
gdjs.Winner_33Code.GDCheatTextObjects1= [];
gdjs.Winner_33Code.GDCheatTextObjects2= [];
gdjs.Winner_33Code.GDSoundObjects1= [];
gdjs.Winner_33Code.GDSoundObjects2= [];
gdjs.Winner_33Code.GDMusicObjects1= [];
gdjs.Winner_33Code.GDMusicObjects2= [];
gdjs.Winner_33Code.GDUFOObjects1= [];
gdjs.Winner_33Code.GDUFOObjects2= [];
gdjs.Winner_33Code.GDUFO_95RangeObjects1= [];
gdjs.Winner_33Code.GDUFO_95RangeObjects2= [];
gdjs.Winner_33Code.GDTimerObjects1= [];
gdjs.Winner_33Code.GDTimerObjects2= [];
gdjs.Winner_33Code.GDScoreObjects1= [];
gdjs.Winner_33Code.GDScoreObjects2= [];
gdjs.Winner_33Code.GDHealthObjects1= [];
gdjs.Winner_33Code.GDHealthObjects2= [];
gdjs.Winner_33Code.GDFPSObjects1= [];
gdjs.Winner_33Code.GDFPSObjects2= [];
gdjs.Winner_33Code.GDDeveloperToolsObjects1= [];
gdjs.Winner_33Code.GDDeveloperToolsObjects2= [];
gdjs.Winner_33Code.GDObjectCounterObjects1= [];
gdjs.Winner_33Code.GDObjectCounterObjects2= [];
gdjs.Winner_33Code.GDTimePlayingObjects1= [];
gdjs.Winner_33Code.GDTimePlayingObjects2= [];
gdjs.Winner_33Code.GDWinTextObjects1= [];
gdjs.Winner_33Code.GDWinTextObjects2= [];
gdjs.Winner_33Code.GDBackgroundObjects1= [];
gdjs.Winner_33Code.GDBackgroundObjects2= [];
gdjs.Winner_33Code.GDFinalScoreObjects1= [];
gdjs.Winner_33Code.GDFinalScoreObjects2= [];

gdjs.Winner_33Code.conditionTrue_0 = {val:false};
gdjs.Winner_33Code.condition0IsTrue_0 = {val:false};
gdjs.Winner_33Code.condition1IsTrue_0 = {val:false};


gdjs.Winner_33Code.eventsList0 = function(runtimeScene) {

{


gdjs.Winner_33Code.condition0IsTrue_0.val = false;
{
gdjs.Winner_33Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Sounds")) == 1;
}if (gdjs.Winner_33Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Sounds\\you_win.ogg", false, 100, 1);
}}

}


};gdjs.Winner_33Code.eventsList1 = function(runtimeScene) {

{


gdjs.Winner_33Code.condition0IsTrue_0.val = false;
{
gdjs.Winner_33Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Winner_33Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FinalScore"), gdjs.Winner_33Code.GDFinalScoreObjects1);
{for(var i = 0, len = gdjs.Winner_33Code.GDFinalScoreObjects1.length ;i < len;++i) {
    gdjs.Winner_33Code.GDFinalScoreObjects1[i].setString("Final Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Score"))));
}
}
{ //Subevents
gdjs.Winner_33Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Winner_33Code.condition0IsTrue_0.val = false;
{
gdjs.Winner_33Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.Winner_33Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", true);
}}

}


};

gdjs.Winner_33Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Winner_33Code.GDPlayerObjects1.length = 0;
gdjs.Winner_33Code.GDPlayerObjects2.length = 0;
gdjs.Winner_33Code.GDSmallBridgeObjects1.length = 0;
gdjs.Winner_33Code.GDSmallBridgeObjects2.length = 0;
gdjs.Winner_33Code.GDCoinObjects1.length = 0;
gdjs.Winner_33Code.GDCoinObjects2.length = 0;
gdjs.Winner_33Code.GDKeyObjects1.length = 0;
gdjs.Winner_33Code.GDKeyObjects2.length = 0;
gdjs.Winner_33Code.GDLeftObjects1.length = 0;
gdjs.Winner_33Code.GDLeftObjects2.length = 0;
gdjs.Winner_33Code.GDRightObjects1.length = 0;
gdjs.Winner_33Code.GDRightObjects2.length = 0;
gdjs.Winner_33Code.GDFlagObjects1.length = 0;
gdjs.Winner_33Code.GDFlagObjects2.length = 0;
gdjs.Winner_33Code.GDExitObjects1.length = 0;
gdjs.Winner_33Code.GDExitObjects2.length = 0;
gdjs.Winner_33Code.GDArrowSignObjects1.length = 0;
gdjs.Winner_33Code.GDArrowSignObjects2.length = 0;
gdjs.Winner_33Code.GDDangerObjects1.length = 0;
gdjs.Winner_33Code.GDDangerObjects2.length = 0;
gdjs.Winner_33Code.GDLaserObjects1.length = 0;
gdjs.Winner_33Code.GDLaserObjects2.length = 0;
gdjs.Winner_33Code.GDDoorObjects1.length = 0;
gdjs.Winner_33Code.GDDoorObjects2.length = 0;
gdjs.Winner_33Code.GDDoorErrorObjects1.length = 0;
gdjs.Winner_33Code.GDDoorErrorObjects2.length = 0;
gdjs.Winner_33Code.GDCheatTextObjects1.length = 0;
gdjs.Winner_33Code.GDCheatTextObjects2.length = 0;
gdjs.Winner_33Code.GDSoundObjects1.length = 0;
gdjs.Winner_33Code.GDSoundObjects2.length = 0;
gdjs.Winner_33Code.GDMusicObjects1.length = 0;
gdjs.Winner_33Code.GDMusicObjects2.length = 0;
gdjs.Winner_33Code.GDUFOObjects1.length = 0;
gdjs.Winner_33Code.GDUFOObjects2.length = 0;
gdjs.Winner_33Code.GDUFO_95RangeObjects1.length = 0;
gdjs.Winner_33Code.GDUFO_95RangeObjects2.length = 0;
gdjs.Winner_33Code.GDTimerObjects1.length = 0;
gdjs.Winner_33Code.GDTimerObjects2.length = 0;
gdjs.Winner_33Code.GDScoreObjects1.length = 0;
gdjs.Winner_33Code.GDScoreObjects2.length = 0;
gdjs.Winner_33Code.GDHealthObjects1.length = 0;
gdjs.Winner_33Code.GDHealthObjects2.length = 0;
gdjs.Winner_33Code.GDFPSObjects1.length = 0;
gdjs.Winner_33Code.GDFPSObjects2.length = 0;
gdjs.Winner_33Code.GDDeveloperToolsObjects1.length = 0;
gdjs.Winner_33Code.GDDeveloperToolsObjects2.length = 0;
gdjs.Winner_33Code.GDObjectCounterObjects1.length = 0;
gdjs.Winner_33Code.GDObjectCounterObjects2.length = 0;
gdjs.Winner_33Code.GDTimePlayingObjects1.length = 0;
gdjs.Winner_33Code.GDTimePlayingObjects2.length = 0;
gdjs.Winner_33Code.GDWinTextObjects1.length = 0;
gdjs.Winner_33Code.GDWinTextObjects2.length = 0;
gdjs.Winner_33Code.GDBackgroundObjects1.length = 0;
gdjs.Winner_33Code.GDBackgroundObjects2.length = 0;
gdjs.Winner_33Code.GDFinalScoreObjects1.length = 0;
gdjs.Winner_33Code.GDFinalScoreObjects2.length = 0;

gdjs.Winner_33Code.eventsList1(runtimeScene);
return;

}

gdjs['Winner_33Code'] = gdjs.Winner_33Code;
