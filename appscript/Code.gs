const SHEET_URL = "{Your Google sheet url}";
const SHEET_NAME = "{Your Google sheet name}";

function doGet(req) {
  const action = req.parameter.action;
  const db = SpreadsheetApp.openByUrl(SHEET_URL);
  const sheet = db.getSheetByName(SHEET_NAME);

  if (action === "read") {
    return ContentService.createTextOutput(JSON.stringify(handleRead(sheet)));
  }

  if (action === "update") {
    const id = Number(req.parameter.id);
    const is_done = req.parameter.is_done === "true";
    return ContentService.createTextOutput(
      JSON.stringify(handleUpdate({ id, is_done }, sheet))
    );
  }
}

function handleRead(sheet) {
  const data = sheet.getDataRange().getValues();
  const headers = data[0];

  return data.slice(1).map((row) => {
    const obj = {};
    headers.forEach((key, i) => {
      obj[key] = row[i];
    });
    return obj;
  });
}

function handleUpdate(data, sheet) {
  const values = sheet.getDataRange().getValues();
  const headers = values[0];
  const idIndex = headers.indexOf("id");
  const doneIndex = headers.indexOf("is_done");
  const updatedIndex = headers.indexOf("updated_at");

  for (let i = 1; i < values.length; i++) {
    if (values[i][idIndex] == data.id) {
      sheet.getRange(i + 1, doneIndex + 1).setValue(data.is_done);
      sheet
        .getRange(i + 1, updatedIndex + 1)
        .setValue(
          Utilities.formatDate(
            new Date(),
            Session.getScriptTimeZone(),
            "yyyy-MM-dd HH:mm:ss"
          )
        );
      return { success: true };
    }
  }

  return { success: false, error: "ID not found" };
}
