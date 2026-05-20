// スプレッドシートID（シートのURLから取得してここに貼る）
const SPREADSHEET_ID = "1elXmSJuJJ2dn3uEcjW_1RnIRB2yvQ0hEyvacusTZroo";

// Google ドキュメントを保存するフォルダID（省略時はマイドライブ直下）
const DOC_FOLDER_ID = "";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const docUrl = createResultDoc(data);
    appendToSheet(data, docUrl);
    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok", docUrl }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── スプレッドシートへの書き込み ──────────────────────────────────────
function appendToSheet(data, docUrl) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheets()[0];

  // ヘッダーがなければ追加
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["日付", "名前", "スコア", "CEFR", "技能別", "所要時間", "結果ドキュメント"]);
    sheet.getRange(1, 1, 1, 7).setFontWeight("bold");
  }

  sheet.appendRow([
    data.date,                    // A: 日付
    data.name,                    // B: 名前
    data.score,                   // C: スコア
    data.cefr,                    // D: CEFR
    data.skills,                  // E: 技能別スコア
    data.timeTaken || formatElapsed(data.elapsed),  // F: 所要時間
    docUrl,                       // G: Google Doc URL
  ]);
}

function formatElapsed(sec) {
  if (!sec && sec !== 0) return "";
  return `${Math.floor(sec / 60)}分${String(sec % 60).padStart(2, "0")}秒`;
}

// ── Google ドキュメント生成 ───────────────────────────────────────────
function createResultDoc(data) {
  const title = `[SkillGet TEST] ${data.name} – ${data.date} (${data.cefr} / ${data.score}点)`;
  const doc = DocumentApp.create(title);
  const body = doc.getBody();

  // タイトル
  body.appendParagraph(title)
    .setHeading(DocumentApp.ParagraphHeading.TITLE);

  // サマリー
  body.appendParagraph("テスト結果サマリー")
    .setHeading(DocumentApp.ParagraphHeading.HEADING1);

  const summaryTable = body.appendTable([
    ["氏名", data.name],
    ["受験日", data.date],
    ["総合スコア", `${data.score} / 100`],
    ["CEFR目安", data.cefr],
    ["所要時間", data.timeTaken || formatElapsed(data.elapsed)],
  ]);
  summaryTable.setBorderWidth(1);

  // 技能別スコア
  body.appendParagraph("技能別スコア")
    .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph(data.skills || "");

  // 答え合わせ
  if (data.details && data.details.length > 0) {
    body.appendParagraph("答え合わせ")
      .setHeading(DocumentApp.ParagraphHeading.HEADING1);

    const headerRow = ["Q", "技能", "レベル", "問題文", "正誤", "あなたの回答", "正解"];
    const tableData = [headerRow];
    data.details.forEach((d) => {
      tableData.push([
        `Q${d.index + 1}`,
        d.skill,
        d.level,
        d.prompt.replace(/\n/g, " "),
        d.correct ? "○" : (d.selectedOption === null ? "−" : "✗"),
        d.selectedOption || "未回答",
        d.correctOption,
      ]);
    });

    const reviewTable = body.appendTable(tableData);
    reviewTable.setBorderWidth(1);

    // ヘッダー行を太字
    const headerTableRow = reviewTable.getRow(0);
    for (let c = 0; c < headerRow.length; c++) {
      headerTableRow.getCell(c).getChild(0).asParagraph().setBold(true);
    }

    // 正誤セルに色をつける
    for (let r = 1; r < tableData.length; r++) {
      const cell = reviewTable.getRow(r).getCell(4);
      const text = cell.getText();
      if (text === "○") {
        cell.setBackgroundColor("#d9ead3"); // 緑
      } else if (text === "✗") {
        cell.setBackgroundColor("#fce5cd"); // 赤
      }
    }
  }

  doc.saveAndClose();

  // フォルダ指定があれば移動
  if (DOC_FOLDER_ID) {
    const file = DriveApp.getFileById(doc.getId());
    DriveApp.getFolderById(DOC_FOLDER_ID).addFile(file);
    DriveApp.getRootFolder().removeFile(file);
  }

  return doc.getUrl();
}
