function doGet(e: GoogleAppsScript.Events.AppsScriptHttpRequestEvent) {
  Logger.log(JSON.stringify(e.parameter))
  const { name } = e.parameter;
  return ContentService.createTextOutput(`Hello ${name}`);
}
