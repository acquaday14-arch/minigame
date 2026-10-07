# Private Teacher Dashboard

A private Apps Script dashboard for the `Records` sheet.

## What it shows
- Automatic game list in the left sidebar
- Attempts, unique students, average score, best score
- Search student / class
- All attempts / latest attempt per student / best attempt per student
- Sort by newest, score, or name
- CSV export
- Responsive layout

## One-time setup
This should be a SEPARATE Apps Script project from the public score-submission API.

1. Open the Google Sheet `MiniGame Record` and copy its URL.
2. The spreadsheet ID is the text between `/d/` and `/edit`.
3. Go to https://script.google.com and create a **New project**.
4. Create:
   - `Code.gs` using `teacher-dashboard/Code.gs`
   - an HTML file named `Index` using `teacher-dashboard/Index.html`
5. In Code.gs replace:
   `PASTE_SPREADSHEET_ID_HERE`
   with the spreadsheet ID.
6. Save.
7. Deploy > New deployment > Web app.
8. For the most private setup:
   - Execute as: Me
   - Who has access: Only myself
9. Deploy and open the web-app URL.

If the dashboard needs to be used by another teacher account, create/deploy it from that teacher's account after sharing the source Sheet with them, or choose the access policy appropriate to your Google account.
