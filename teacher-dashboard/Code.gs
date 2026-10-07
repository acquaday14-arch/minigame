const SPREADSHEET_ID = "PASTE_SPREADSHEET_ID_HERE";
const RECORDS_SHEET = "Records";

function doGet() {
  return HtmlService.createTemplateFromFile("Index")
    .evaluate()
    .setTitle("Mini Game Teacher Dashboard")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
}

function getDashboardData() {
  if (!SPREADSHEET_ID || SPREADSHEET_ID === "PASTE_SPREADSHEET_ID_HERE") {
    throw new Error("Please set SPREADSHEET_ID in Code.gs first.");
  }

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(RECORDS_SHEET);
  if (!sheet) throw new Error('Sheet "' + RECORDS_SHEET + '" was not found.');

  const values = sheet.getDataRange().getDisplayValues();
  if (values.length < 2) return { rows: [], updatedAt: new Date().toISOString() };

  const headers = values[0].map(String);
  const idx = {};
  headers.forEach((h, i) => idx[h.trim()] = i);

  const required = [
    "Submitted At","Student Name","Class / Code","Game","Score","Total",
    "Percent","Duration (sec)","Completed At (client)","Attempt ID","Game URL"
  ];
  required.forEach(h => {
    if (!(h in idx)) throw new Error("Missing column: " + h);
  });

  const rows = values.slice(1)
    .filter(r => r.some(v => String(v).trim() !== ""))
    .map((r, n) => ({
      rowNumber: n + 2,
      submittedAt: r[idx["Submitted At"]] || "",
      studentName: r[idx["Student Name"]] || "",
      classCode: r[idx["Class / Code"]] || "",
      game: r[idx["Game"]] || "",
      score: Number(r[idx["Score"]] || 0),
      total: Number(r[idx["Total"]] || 0),
      percent: Number(String(r[idx["Percent"]] || "0").replace("%","")) || 0,
      durationSeconds: Number(r[idx["Duration (sec)"]] || 0),
      completedAt: r[idx["Completed At (client)"]] || "",
      attemptId: r[idx["Attempt ID"]] || "",
      gameUrl: r[idx["Game URL"]] || ""
    }));

  return {
    rows,
    updatedAt: new Date().toISOString(),
    spreadsheetName: ss.getName()
  };
}
