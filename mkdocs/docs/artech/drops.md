# Drops (AR Tech)

## Excessive Absence Drops

!!! info
    EA Drops occur **between the Census date and the last day to drop with a "W"**. For late EA drop requests, email faculty that the deadline has passed; faculty must get **Division Dean permission** before requesting.

**RGN:** Find the course and detail in.

**RGCS:**

| Field | Value |
|-------|-------|
| Status/Date | `D` (Dropped) — defaults to today |
| Status Reason | `EA` (Excessive Absence) |
| Drop Grade | `W` |
| Last Attended Date | Request date of the form (leave if already filled) |

Click **Save All**. If corequisite or higher-level course exists, drop it too using reason `PD`.

**STAC:**
1. Detail into course.
2. Check for empty drop lines using the **">"** arrow — delete any.
3. Update Grade to `W`.
4. Click **Save All**.

**Error — Class active in STAC but not showing on RGN:**
1. Check in STAC if the program is CC or CE.
2. If CC, check RGCS for a grade entered in error.

---

## No Show Drops

### On Time No Show Drops

**Verify before processing:**
- Submitted by instructor (from instructor/division email or Dynamic Forms).
- Submitted prior to class drop deadline.
- Form is complete (including section number).

!!! info "NS vs N1"
    - **NS** = initiated by faculty submitting a late No Show.
    - **N1** = special circumstances (VP of Academic Affairs, Dean, student, etc.).
    - NS is considered **late** if submitted on or after census — requires Division Dean and VP signature.
    - If student added after census: push registration back to first day of class and drop. Add notes in STAC documenting original registration date and time.

**RGSD:** Backdate to first day of class.

**RGN:** Find course and detail in.

**RGCS:**

| Field | Value |
|-------|-------|
| Status/Date | `D` — defaults to RGSD date |
| Status Reason | `NS` |
| Drop Grade | Remove anything |
| Last Attended Date | Remove anything |
| Never Attended | `Y` |

Click **Save All**. Drop corequisite/higher-level course with `PD` if applicable.

**STAC:**
1. Update Reason to `NS`.
2. Check for empty drop lines — delete any.
3. Click **Save All**.

**Laserfiche:** Scan if physical form.

---

### If Student Dropped Before You Can Process

**STAC:**
1. Update drop date to first day of class.
2. Update Reason to `NS`.
3. Remove W or grade.
4. Click **Save All**.

**RGCS:**
1. Update Status Reason to `NS` if not already.
2. Remove W or grade.
3. Update Never Attended to `Y`.
4. Click **Save All**.

---

### Late NS/N1 Drops When Grade Is on File

!!! info
    For open entry/open exit sections: backdate the student's registration to the day they added the course and drop them on that day.

**STAC (skip if no grade yet):**
1. Detail into Notes/Comments → Comments.
2. Add comment about which grade was removed and the reason.
3. Delete grade.
4. Save out of Comments, STNC, SACD, and STAC.

**RGCS (skip if no grade yet):**
1. Delete grade.
2. Click **Save All**.

**RGSD:** Backdate to first day of class.

**RGN/RGCS:** Follow same fields as On Time NS — use `NS` or `N1` as Status Reason.

!!! note
    For **N1 drops**: leave Never Attended **blank** (unlike NS where it is `Y`).

**STAC:**
1. Update Reason to `NS` or `N1`.
2. Remove empty drop lines.
3. Click **Save All**.

**Laserfiche:** Scan if physical form.

---

## Batch Drops

**SLED** — Load data.

**DREG** (requires Course.Section.ID from BGVU query):
1. First run Update Mode **"No"** — review for errors.
2. Reason: `Transfer`.
3. Cannot backdate a batch drop.
4. If all looks good, run again with Update Mode **"Yes"**.

---

## Student Conduct Drops

**N1 Drop:** Less common — requires backdating to an NS drop for no transcript entry and refund. Does not require Dr. Lamb's signature for Student Conduct Drops (per Liz).

**N2 Drop (Disciplinary):** Most common — results in a `W` grade. For past classes, backdate to prior to the W deadline.

### Steps

**SRGD:** Note the day prior to the W deadline for the section.

**RGSD:**
- If N1: backdate to first day of class.
- If N2: backdate to prior to W deadline.

**If grade already assigned:**

STAC → detail into class → remove grade.
RGCS → detail into class → remove grade.

**RGN:** Find course → change status to "Dropped."

**RGCS:**
1. Use Instructor Request Date as the drop date.
2. Status Reason: `N1` or `N2`.
3. Drop Grade: `W` if N2.
4. Drop higher-level course if tied, using reason `PD`.

**STAC:**
1. Check drop lines and remove duplicates.
2. Enter `W` grade (also auto-applied in BGVU).
3. Add detailed comment with timestamp.
   - Example: *"Drop request received from student conduct office. Form filed to LF for details."*

---

## Prerequisite Drops

**RGVE** — Run prerequisite check.

!!! note
    This report takes a long time. Run it and retrieve from UTFB (Directory File Name: `_HOLD_`, Security Type: `PB`, Item Names: `RGVE...`). Save as `.csv` and open with Excel.

### Overview

1. **First run** (Deregister Failed Records = **NO**) — generates suggestions for deregistration. Review list for accuracy. Load into SLED.
2. **Second run** — actually deregisters, referencing the SLED list.

### RGVE Setup

- Set "Deregister Failed Records" to **NO** for first run.
- Update Terms to the term you are checking.

### Filtering the Report

- **Error Message:** Search for "The following..."
- **Requisite Waiver Provider (Name):** Show only Blanks.
- **Deregister?:** Show only Yes.

### Checking
- Verify students should actually be dropped.

### Query
- Query for `STUDENT_COURSE_SEC_ID` using `RGVE.sql`.
- After running, double-check results — if a long list, verify section number matches the correct student. Run a match on Student IDs from the query against the drop list. Highlight multiples.

### Deregister
- Create a savedlist in SLED of students to be dropped.
- Use that savedlist in RGVE with Deregister = YES.
- Download report and verify students are dropped. If "No" — check the override. If A&R staff override, manually drop for PD.

### Email Students
After RGVE, run **PCEX** with student communication code `PREREQ` and `Y` in "Process Letter Request."

To view the PREREQ email: go to **DOC** → type `PREREQ` → detail into "Document Paragraphs."
