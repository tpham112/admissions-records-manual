# CJA Enrollment

## Steps

### 1. Prepare the File
- Save the Excel file from Teams as a **CSV file**. Clean it up and upload to the **Online Report Repository (AR0160)**.
- **Naming Convention:** Section Course Name and Number, Semester and Year.
    - Example: `37362 CJA 034C 2023FA.csv`

### 2. Match Students
- Copy and paste to a new sheet on the CSV and use the MATCH formula to find existing students:
    ```
    =MATCH(C2,Sheet1!$B$1:$B$50,0)
    ```
    - Insert a column → Enter `=match(` → Click first last name on Sheet 1 → comma → Click Sheet 2 and highlight all last names → F4, comma, zero, close parentheses → Enter → Pull down.
    - Or just copy IDs to each student and fill in what's missing.
- Check if students are able to register or if they need new applications.
    - If they need a new app: find the application in the packet, load the new application, mark it, and Laserfiche it.

### 3. Find Missing IDs
- For students without a match, search Colleague in **NAE** to find their Student ID number and add to Sheet 1.

### 4. Create SLED List
- Once every student has an ID, **create a list in SLED** (list name: `tp`) with all Student ID numbers.
- Save All.

### 5. Add CJA Section to SCBL
- Add CJA section to **SCBL** (list name: `cjtp`).
- Make sure the CJA course falls within the dates of the term.

### 6. Batch Enroll in BRGN

**Step 1 — Check for errors (no changes made):**

| Field | Value |
|-------|-------|
| Section Block | `CJER` |
| Reg User Group | `ARSTAFF` |
| Date | First day of class listed on the packet |
| Update | **No** |
| Saved list name | `ER` |

**Step 2 — Enroll the students:**

| Field | Value |
|-------|-------|
| Section Block | `CJER` |
| Reg User Group | `ARSTAFF` |
| Date | First day of class listed on the packet |
| Update | **Yes** |
| Saved list name | `ER` |

!!! warning
    **SAVE THIS OUTPUT.**

### 7. Save Course Roster via SROS
- Term: Current Term
- Section number: `/xxxxx`

!!! warning
    **SAVE THIS OUTPUT.**

### 8. Wrap Up
- Log completion date in the Excel file.
- Delete the name search Excel file in Teams.
- Scan and save the whole packet (Paper Packet, BRGN Output, SROS Output; combine through Adobe) to:
  `M:\Instructor Grade Book\Term YYYY - Instructor Folders\00CJA`
- Email Martin or Lisa with a list of sections ready for grade (new process: complete the request on Dynamic Forms).

---

## Notes

When completing a new application for a student, go to **ASUM** and click the paper icon next to an open application field. Input:

- Start Term
- Academic Program (from application)
- Admit Status
- Residency Status (`R`)
- Student Type (`RGLR`)
