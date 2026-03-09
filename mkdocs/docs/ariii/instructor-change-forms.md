# Instructor Change Forms

## Unit Changes

### Prior to Grades Assigned

**RGN:**
1. Enter **Student ID**.
2. Find the course.
3. Change the units.
4. Click **Save All**.

**Laserfiche:** Scan to Laserfiche if physical card.

!!! note
    No need to request a rebill — bill will run automatically overnight.

!!! note "Screenshot Placeholder"
    RGN unit change screenshot is in the original Word manual.

---

### After Grades Assigned

**STAC:**
1. Enter **Student ID**.
2. Detail into the section.
3. Update units.
4. Click **Save All**.
5. Reach out to **Cashier's for rebill**.

**Laserfiche:** Scan to Laserfiche if physical card.

!!! note "Screenshot Placeholder"
    STAC unit change screenshot is in the original Word manual.

---

## Reinstatement

**RGCS:**
1. Enter **Student ID** and detail into the course.
2. Copy or write down the original drop date.
3. Enter the following fields:

| Field | Value |
|-------|-------|
| Status | `A` (Active) |
| Date | Original drop date (if weekend, use Monday) |
| Status Reason | `RE` |
| Drop Grade | Delete the W or any grade |
| Last Attended Date | Delete anything in this field |
| Never Attended | Delete anything in this field |

4. Click **Save All**.

**STAC:**
1. Enter **Student ID** and detail into the course.
2. Go to **Line 2** of Status/Dt/Time/Reason to see the drop time.
3. Go back to **Line 1** and update the add time to **at least one minute after the drop time**.
4. Delete grade if any.
5. Click **Save All**.

**RGN:** Verify the student is now registered in the class.

**Laserfiche:** Scan to Laserfiche if physical card.

!!! note "Screenshot Placeholders"
    RGCS and STAC reinstatement screenshots are in the original Word manual.

---

## Excessive Absence Drops

!!! info "When EA Drops Occur"
    EA Drops occur **between the Census date and the last day to drop with a "W"**.
    
    For faculty requesting **late EA drops**: email them that the deadline has passed, inform them we cannot accept or backdate such drops, and remind them that per the catalog, dropping is ultimately the student's responsibility. Faculty must get **Division Dean permission** before requesting a late EA or Drop.

**RGN:** Enter **Student ID** and detail into the course.

**SRGC:**
1. Enter the following fields:

| Field | Value |
|-------|-------|
| Status | `D` (Dropped) — date defaults to today |
| Status Reason | `EA` (Excessive Absence) |
| Drop Grade | `W` |
| Last Attended Date | Request Date of the form (if already filled, leave alone) |

2. Click **Save All**.
    - If the course is tied to a higher-level course or has a corequisite:
        - Check XSRWS for a waiver. If none, drop the higher-level/corequisite course as well using reason `PD`.

**STAC:**
1. Enter **Student ID** and detail into the course.
2. With an EA drop, sometimes an **empty drop line** is added. Click on a Status/Dt/Time/Reason field.
3. Click the **">"** arrow to check through multiple lines for empty drop lines.
4. Click **Delete** to remove any empty drop lines.
5. Update Grade to `W`.
6. Add Comments with **timestamp**.
7. Click **Save All**.

**Possible Error — Class is active in STAC but does not show on RGN:**
1. Check in STAC if the program is CC or CE.
2. If CC, check RGCS to see if a grade was already entered in error.

!!! note "Screenshot Placeholders"
    RGN, SRGC, and STAC EA drop screenshots are in the original Word manual.

---

## No Show Drops

### On Time No Show Drops

**Verify before processing:**
- Card was submitted by instructor (ideally from instructor or division email) or on Dynamic Forms.
- Was submitted **prior to class drop deadline** (check SRGD).
- Form is **complete** (including section number).

!!! info "NS vs N1"
    - **NS** = No Show submitted late by faculty.
    - **N1** = Special circumstances (VP of Academic Affairs, Dean, student, A&G, etc.).
    - NS is considered **late** if submitted on or after census. Late NS requires Division Dean and VP signature (auto-routed with Dynamic Forms).

**RGSD:** Backdate to first day of class. *(If student added after first day, backdate to the day the student added the course.)*

**RGN:** Enter **Student ID** and detail into the course.

**SRGC:**

| Field | Value |
|-------|-------|
| Status | `D` (Dropped) — date defaults to RGSD date |
| Status Reason | `NS` |
| Drop Grade | Delete anything |
| Last Attended Date | Delete anything |
| Never Attended | `Y` |

Click **Save All**. (Drop corequisite/higher-level course with `PD` if applicable.)

**STAC:**
1. Enter **Student ID** and detail into the course.
2. Remove any empty drop lines using the **">"** arrow and **Delete**.
3. Go to Line 2 to see add time.
4. Update **drop time** on Line 1 to at least one minute after add time.
5. Add Comments with **timestamp**.
6. Click **Save All**.

**Laserfiche:** Scan to Laserfiche if physical form.

---

### If Student Dropped Before You Can Process

**STAC:**
1. Update Drop date to **first day of class**.
2. Update Reason to **`NS`**.
3. Remove W or any grade.
4. Click **Save All**.

**RGCS:**
1. Update Status Reason to **`NS`** if not already.
2. Remove W or grade.
3. Update Never Attended to **`Y`**.
4. Click **Save All**.

---

### Late NS/N1 Drops When Grade Is on File

**STAC (skip if grade has not yet been assigned):**
1. Enter **Student ID** and detail into the course.
2. Delete grade if any.
3. Detail into **Notes/Comments** → **Comments**.
4. Add comment about which grade was removed and the reason (Late No Show/N1 drop).
5. Save out of Comments, STNC, SACD, and STAC.

**RGCS (skip if grade has not yet been assigned):**
1. Enter **Student ID** and detail into the course.
2. Delete grade.
3. Click **Save All**.

**RGSD:** Backdate to first day of class.

**RGN/SRGC:** Follow the same fields as On Time No Show — use **`NS`** or **`N1`** as Status Reason.

**STAC:**
1. Remove any empty drop lines.
2. Update drop time to at least one minute after add time.
3. Leave a comment: Timestamp + **"Late No Show"**.
4. Click **Save All**.

**Laserfiche:** Scan to Laserfiche if physical form.

!!! info "Fire Tech Note"
    For Fire Tech late NS drops after end of course, only **William Reardon's** signature is needed (per Hung).

---

## Grade Changes

!!! warning "What Instructors Cannot Request"
    Instructors **cannot** request F, D, or NP to W grade changes. The student must submit an **EW** or **A&G request**.

!!! warning "EA Drops After W Deadline"
    Instructors requesting an EA drop after the withdrawal deadline need a **Division Dean's signature** before processing.

**STAC:**
1. Enter **Student ID** and detail into the course.
2. Delete grade.
3. Detail into **Notes/Comments**.
4. Enter **`IGC`** into Notes/Dates.
5. Detail into **Comments**.
6. Make a detailed **comment + timestamp** and save twice to get back to SACD.
7. Click **Save All**.

**RGCS:**
1. Enter **Student ID** and detail into the course.
2. Delete grade.
3. Click **Save All**.

**STAC:**
1. Enter **Student ID** and detail into the course.
2. Enter the **new grade**.
3. Click **Save All**.

**Laserfiche:** Scan to Laserfiche if physical form.

---

## Class Transfer

!!! warning "Requirements"
    - Must be **same length to same length** (e.g., 8-week to 8-week; 16-week to 16-week — NOT 16 to 8).
    - Same Start and End Dates.
    - **Student signature is needed after census date.** If still in Add Authorization period, student does not need to sign.
    - If transferring to a new instructor, the **new instructor must initiate** the class transfer.
    - A student can transfer from a short-term class to a full-term class (per Hung).
    - Can move a student from an honors class to a non-honors class. **Cannot** move from non-honors to honors.

### Before Census

**RGN:**
1. Enter **Student ID** and detail into the old course.
2. Set Status to **`D`** (Dropped), Status Reason to **`TR`** (Transfer).
3. Click **Save**.
4. Go to an empty line and type in the new section.
5. Detail into new section → set Status Reason to **`TR`**.
6. Click **Save All**.

**STAC:**
1. Detail into the dropped section.
2. Add **`TR`** code to dropped section if needed — note the time.
3. Click **Save**.
4. Detail into new section.
5. Add **`TR`** code to added section — change add time to **1 minute after** the class drop.

**If online course — email instructor:**
> "Hello [Instructor], your class transfer request has been completed for [student name] from [old section] to [new section]. Please be sure to enter grades from the student's old section to your section. For assistance, please reach out to DistanceEd@sac.edu."

Instructor resource for viewing grades from a previous section:
[How do I view grades for inactive or concluded students? (Canvas)](https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-view-grades-for-inactive-or-concluded-student/ta-p/753)

---

### After Census

**RGSD:** Backdate system to the **Friday before Census date**, then follow the same steps as Before Census.

!!! danger
    Don't forget to **return RGSD to current date** after processing!
