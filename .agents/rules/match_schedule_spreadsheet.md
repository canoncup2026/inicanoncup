# Match Schedule Spreadsheet Reference & Sync Rule

- **Google Spreadsheet Master URL**: `https://docs.google.com/spreadsheets/d/1MhBjpKatskDdtDELuzocSmQJJOnfePrp/edit?usp=sharing&ouid=108055626272630169145&rtpof=true&sd=true`
- **Spreadsheet ID**: `1MhBjpKatskDdtDELuzocSmQJJOnfePrp`
- **CSV Export Endpoint**: `https://docs.google.com/spreadsheets/d/1MhBjpKatskDdtDELuzocSmQJJOnfePrp/export?format=csv`

## Workflow & Trigger Rule:
1. **Trigger Command**: When the user chats `"update skor"` (or asking to update/sync scores/schedules):
   - Immediately fetch the latest CSV from the Google Spreadsheet export endpoint.
   - Parse and sync all scores, team names, and tournament progression into `js/data.js` under `matchSchedules`.
   - Provide a clean recap of the newly updated scores and match results in the chat.
2. **Vercel Push Rule**:
   - Do NOT push to Vercel automatically.
   - Strictly wait for the user to chat `"push ke vercel"` before committing and pushing to GitHub/Vercel.
