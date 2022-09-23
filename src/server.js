function doGet(e) {
  Logger.log(JSON.stringify(e))
  return ContentService.createTextOutput(JSON.stringify({name: 'dudu'}));
}
