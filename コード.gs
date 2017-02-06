function chartman() {
  var html = HtmlService.createHtmlOutputFromFile('motion')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setWidth(900)
    .setHeight(520);
 
 SpreadsheetApp.getUi() 
    .showModalDialog(html, 'モーションチャートの作成');
}

function datamanrev(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var ss = sheet.getSheetByName("motion");
  var dataman = ss.getRange("A1:F").getValues();
  return JSON.stringify(dataman);
}

function onOpen(){
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('▶チャート表示')
      .addItem('モーションチャート', 'chartman')
      .addToUi();
}