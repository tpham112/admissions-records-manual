# Duplicate ID

## Determining Good vs. Bad ID

- If Financial Aid was awarded, that record **must stay as Good ID** (check AIDE and AWSU — verify with Thuy Huong Nguyen and Ha Dinh personally, not the FinAid email).
- If a duplicate was created by HR, the HR record **always must stay** as Good ID.
- If neither applies: take the record with **more data** as Good ID.

!!! tip
    Work with two Colleague screens open on two monitors — one for BAD ID, one for GOOD ID. Use color coding to keep them straight.

- Only move **College Credit** records. Contact SCE to move non-credit.
- If MM is on the bad ID, reach out to Assessment Center to have it moved.
- **Always move Applications (ASUM) first, then classes (STAC).**
- ALL classes must be moved including dropped without grade, dropped prior to class start, cancelled, and enrollment errors.

!!! warning "Active Classes on Bad ID"
    Work closely with ITS and Distance Ed to have Canvas access moved, restored, and tested on Good ID right away. Inform the student of their new login info immediately — call rather than email, then follow up with details by email.

---

## Step-by-Step Process

### 1. Move Personal Information (NAE)

1. Verify all information on Good ID is correct. If the newest application was moved from Bad ID and there is discrepant info on NAE, access the application on CCCReport Center and update personal data accordingly.
2. Move SSN from Bad ID to Good ID → Save All.

This step verifies it is indeed a duplicate before moving any other data.

### 2. Move ASUM

Add new entry, then in **SHAP:**
- Change Catalog year first.
- Duplicate all entries including dates, times, and processing clerks (ADW, MS, etc.).
- Add comment in ASUM: *"Application for SAC.XXX.XX for Term XXX was moved from BAD ID XXXXXX to GOOD ID XXXXXX."* + timestamp.

### 3. Update Dates on SPRO

Check programs newly added on SPRO and copy activation dates from Bad ID to Good ID. Start with activating the oldest academic program and keep it active to make registering courses easier, then add all details at the end.

### 4. Check Residency

Verify the newly moved applications haven't changed residency status. Confirm any later residency reclassification or AB540 processed on Good ID is still intact.

If loading CAPU: Check **STPE** and duplicate/enter non-resident waivers for terms if needed.

### 5. Move STAC Records

Work one class at a time — on the old ID, the pointer will automatically move to the next record when you cancel out.

**Add class on Good ID:**

**RGSD:** Backdate to individual class registration date.

**RGN:**
- Add class.
- If error "doesn't meet eligibility": check STPE for CAP waiver.
- If course is too old and has no section number: add directly through STAC.

**STAC:**
1. Update time to true reg time (if drops exist, ensure add times are after drop time).
2. Check for additional lines (drops).
3. Enter grade.
4. Add comment: *"This section has been moved from BAD ID XXX to GOOD ID XXX."* + timestamp.
5. Move the CSU/IGETC/AA.
6. Check STRP — if repeat, update on new record as well.

**RGSD:** Update back to today.

**Drop class on Bad ID:**

**RGSD:** Set date to drop date (first day of class).

**STAC & RGCS:** Remove grades.

**RGN:** Drop at first day of class. *(If added during ADD period (status A), drop with add date.)*

**STAC:**
1. Enter `ER` (Error) code next to the drop.
2. Verify only 1 drop line was added.
3. Add comment: *"This section has been moved from BAD ID XXX to GOOD ID XXX."* + timestamp.

**RGSD:** Update back to today.

### 6. Move Laserfiche Records

**Laserfiche:** Move all documents from Bad ID to Good ID record.

### 7. DADD and Canvas Access

**DADD:**
1. Move all records from Bad ID to Good ID.
2. After move, delete any CCID / DCCID or OLD CCID from the Bad ID to avoid Canvas issues.
3. Contact Distance Education (Jimmy or Ambar) to verify Canvas account is created and active for permanent ID. If not, open an ITS helpdesk ticket to Michael Ward.

### 8. Set Bad ID to Duplicate

**BIO:**
1. Add `=XXX` before last name.
2. Remove middle name and copy Good ID into Middle Name field.
3. Set Privacy to `X` (Duplicate).
4. Set Directory to `N`.

**SPRO:** Inactivate all programs with first day of term.

**PERC:**
1. Enter `1 ADM` Hold.
2. Drill into Comments → add: *"Duplicate ID — DO NOT USE. Good ID XXXXXXX — [clerk name who found duplicate]."* + timestamp.

Notify Cashier's and any other relevant parties.

**Give back to ARII to file and move Laserfiche records.**

---

## Unmerging Wrongly Merged Applications

!!! danger "Do Not Delay"
    Original data in Test/UAT could get cloned and lost. Act immediately.

1. Check the original student record in **TEST** to identify what belongs to the original student.
2. Load the new application from CCCApply (name search if prior record exists; otherwise create new student record).
   - If SSN got merged: remove from merged ID first, then apply to new account.
3. Once new student application is correctly loaded, clean up the merged account:
   - **NAE:** Update address, delete wrong address from history. Check phone, email, SSN, ethnicity.
   - **SPRO:** Inactivate program with first day of term. Add comment. Check ASPR and Student type.
   - **ASUM:** Set application to `AD` (Do Not Use) and add comment.
   - **DADD:** Remove any added CCCID from the wrong application.
   - **STAC:** Move already-registered classes from wrong student to correct ID and delete from merged record.

---

## Canvas Access and Duplicate Scenarios (ITS Notes)

### Case 1 — Different Students, Wrong CCCID on Existing Student
Canvas SIS import fails for new student due to duplicate CCCID. Search NAE → DADD. Open ITS Help Desk Ticket for Canvas Admin to update existing student's CCCID.

### Case 2 — Different Students, Wrong CCCID on New Student
Same as Case 1 but A&R corrects the CCCID in Colleague for the new student — no ITS action needed.

### Case 3 — Same Person, Existing Student Has Duplicate CCCID
Mark existing (Bad) record as duplicate. Open ITS Help Desk Ticket. Canvas Admin updates CCCID for Bad record, then merges Canvas accounts.

### Case 4 — Same Person, New Student Has Incorrect CCCID
Mark new (Bad) record as duplicate. No ITS Canvas action needed.

### Case 5 — Same Person, Different CCCIDs
Both Canvas accounts may exist. Search using `;PERSON.EMAIL.ADDRESSES`, `;SSN`, or `;BIRTH.DATE`. Open ITS Help Desk Ticket for Canvas Admin to merge users regardless of which record is duplicate.

### Case 6 — Different Students, CCCID Update Causes Conflict
Open ITS Help Desk Ticket to correct — even if no login issues, updates may not flow to Canvas correctly.

!!! tip "Search format for DADD lookup"
    `;PERSON.ALT.IDS ABC1234`
