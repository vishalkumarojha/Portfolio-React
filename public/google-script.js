// This is the Google Apps Script code that should be deployed as a web app
// Copy this code to a new Google Apps Script project and deploy it as a web app

function doGet(e) {
    return HtmlService.createHtmlOutputFromFile("form")
  }
  
  function doPost(e) {
    try {
      // Open the spreadsheet by ID - make sure to use your actual spreadsheet ID
      var ss = SpreadsheetApp.openById("1ssrIiZvBo6PL0wBrCOxnBBSVG4Q65Iwy3uC1I0eU6_4")
  
      // Get form data
      var formType = e.parameter.form || "contact"
      var timestamp = e.parameter.timestamp || new Date().toISOString()
  
      if (formType === "contact") {
        var name = e.parameter.name || ""
        var email = e.parameter.email || ""
        var subject = e.parameter.subject || ""
        var message = e.parameter.message || ""
  
        // Get or create Contact Form sheet
        var sheet = ss.getSheetByName("Contact Form")
        if (!sheet) {
          sheet = ss.insertSheet("Contact Form")
          sheet.appendRow(["Timestamp", "Name", "Email", "Subject", "Message"])
        }
  
        // Add data to the spreadsheet
        sheet.appendRow([timestamp, name, email, subject, message])
      } else if (formType === "newsletter") {
        var newsletterEmail = e.parameter.email || ""
  
        // Get or create Newsletter sheet
        var newsletterSheet = ss.getSheetByName("Newsletter")
        if (!newsletterSheet) {
          newsletterSheet = ss.insertSheet("Newsletter")
          newsletterSheet.appendRow(["Timestamp", "Email"])
        }
  
        // Add data to the spreadsheet
        newsletterSheet.appendRow([timestamp, newsletterEmail])
      }
  
      return ContentService.createTextOutput(
        JSON.stringify({
          result: "success",
          message: "Data successfully saved to spreadsheet",
        }),
      ).setMimeType(ContentService.MimeType.JSON)
    } catch (error) {
      return ContentService.createTextOutput(
        JSON.stringify({
          result: "error",
          message: error.toString(),
        }),
      ).setMimeType(ContentService.MimeType.JSON)
    }
  }
  
  