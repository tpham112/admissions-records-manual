# Grade Changes (AR Tech)

## Standard Grade Change

**STAC:**
1. Detail into course.
2. Detail into **Notes/Comments**.
3. Enter **`IGC`** into Notes/Dates.
4. Detail into **Comments**.
5. Make a detailed comment + timestamp. Save twice to get back to SACD.
6. Remove grade.
7. Click **Save All**.

**RGCS:**
1. Enter Student ID → detail into course.
2. Delete grade.
3. Click **Save All**.

**STAC:**
1. Enter Student ID → detail back into course.
2. Enter the new grade.
3. Click **Save All**.

**Laserfiche:** Scan if physical form.

---

## Closing Incomplete Contracts

Same steps as above, but add these comments:

**If contract is on file:**
> "Incomplete Grade I changed to X. Incomplete contract on record. Specifies grade change to X if contract is not completed. Contract term ended with end of Fall 20XX."

**If no contract on file:**
> "Incomplete Grade I changed to F/P/A etc. No Incomplete contract on record. Contract term ended with end of Fall 20XX. F grade assigned to close contract."

!!! warning "If Student Is Not Currently Active"
    RGCS will render an error. Steps:
    1. Activate Program.
    2. Process Grade Change.
    3. Inactivate Program.

---

## Change P/NP to Letter Grade

**Eligibility:** Only when the student selected P/NP through Self-Service during registration AND did not submit a P/NP petition.

**Steps:**
1. Student must make a request by **email**.
2. Run a query to verify that P/NP was selected during Self-Service registration.
3. If yes, check if we have the instructor's grade book (or request it).

**STAC:**
1. Drill in → remove P → leave grade blank.
2. Add comment:
   > *"Grade change from P to A based on supporting documentation. Student accidentally selected P/NP during registration in Self-Service. Student requested to have the letter grade."*
   - If no instructor grade book available (only RGCS), note that in the comment.
3. Timestamp → Save out.

**RGCS:** Verify grade matches the instructor's grade book.

**STAC:** Enter grade and save out.

---

## BGVU — Assign W

Run BGVU query daily to get student **Academic Credit IDs** — use those IDs in the Savelist, **not** Student ID numbers.

**Query:**
1. Update `STC_STATUS_DATE` to today's date.
2. Set `"AND STC_STATUS_DATE < '<Today's Date>'"`.

**SLED:** Create Savelist with **Academic Credit IDs** (NOT Student IDs).

**BGVU:**
1. Enter Savelist name.
2. Save All.
