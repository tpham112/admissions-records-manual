# Early Decision

## Day Prior to Event

1. **Bulk assign `1EDPR`** for CORM with start date set to day of ED participation.
2. Assign Registration Dates for the relevant ED date.

**Check the list for:**
- Active Application
- Majors
- Home Campus
- Student Type
- Residency Status

**Process:**
- In the ID column edit for query with formula: `=CHAR(39) & A1 & CHAR(39) & CHAR(44)`
- Run ED Query to check the above fields.

Note: The query may list duplicate Student IDs if students have multiple programs — highlight duplicates.

**Student Type:**
- Verify or update all CAP to RGLR with start date 06/01, if a SU/FA or earlier application with RGLR student type is on record.
- If no RGLR application: let Outreach know.
- Compare "Application" vs. "SPRO" student types from Query. If APP is RGLR but SPRO shows CAP, update on SPRO.

**Home Campus:**
- Add SAC for all CEC students.
- If SCC home campus: let Outreach know.

**Residency:**
- Fix all CERs (check if application status is R before fixing).
- Highlight Non-Res and Foreign → let Outreach know.

**Major:**
- Highlight all majors that don't qualify for FinAid (all certificate majors) → let Outreach know.

Run modified Applications Query to check if all students have an active application status (remove duplicates, use MATCH formula).

---

## Morning of Event

Outreach sends additional students:
- Assign registration dates.
- Add to `1EDPR` on CORM with relevant start date.

---

## During Event

Assist with student issues (missing application, residency, etc.).

!!! warning
    Make sure to add any onsite additions to `1EDPR` and assign reg date on site.

**Assign CORM flags:**
- Puente: `1PUEN`
- Ulink: `1ULIN`

When assigning these, set to **Active** and assign role **"Active"**.

### Honors Waivers (ULINK Honors Cohort)

If counseling is not available, A&R must enter the Honors Waiver:

**PERC:**
- Enter general `HONRS` waiver.
- Start date: today.
- End date: prior to next term registration start *(Fall Honors end date: 10/31/YYYY)*.

**XSRWS:**
- For any classes with prerequisites (e.g., ENGL 101), also place a waiver on XSRWS for Honors classes.
- Drill in to complete.

Once waivers are placed, have students register and verify completion via RGN.

---

## After Event

### Confirm Registration

*(Starting from 2nd week of ED — for first week, start at Registration Reporting below.)*

1. Run CORM Flag for `1EDPR` by event date.
2. Compare (MATCH) with the preliminary list for that day.
3. Run CORM Flag for `1EDPR` by student IDs who were on the preliminary list but don't appear in the CORM report (they may have an earlier CORM start date).
4. Change CORM start date for those students to that day, then proceed.

### Registration Reporting

1. Run CORM Query to extract all students added with start date = event date from `1EDPR`.
   - Formula: `=CHAR(39) & A1 & CHAR(39) & CHAR(44)`
2. Use that student list to run Registration Query for ED students.
3. Identify students on `1EDPR` who did not register (MATCH formula).
4. Send both lists to Outreach:
   - Total expected students with non-registered highlighted (possible no-shows).
   - Registration report with total units registered.
5. Copy Hung on this report.
6. Add registration report to master list Excel file.
7. Add `1EADE` for students who registered for Fall.
