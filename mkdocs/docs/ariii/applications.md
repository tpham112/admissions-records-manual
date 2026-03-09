# Processing an Application Batch

## STEP 1 — Download the Information

**EAPP (first run — No, Yes, No):**
1. Type `SAC...` and select the date and time for the batch you are scheduled for.
2. Run using **No, Yes, No**.
3. Make sure the output device is **`H`** (Hold the report) — then Save All.

**EAPP (second run — No, No, Yes):**
1. Once the first run finishes, run EAPP again using **No, No, Yes**.
2. Save out and exit the report.

!!! note "Screenshot Placeholders"
    EAPP run screenshots are in the original Word manual.

---

## STEP 2 — Clear Person/Address Duplicates

1. Go to **AIBD** (enter `SAC...` again to find the batch).
2. Drill into **"Resolve Person/Address Duplicate"**.

For each error, drill into the line:

**Address/Person errors:**
- If info matches → input **`Y`** in the Combine box → Save.
- If info does not match → input **`N`** in the Combine box → Save.

**Application errors (majors/academic programs):**
- **Always input `N`** — do not combine.
- Make sure to check for multiple majors — put `N` for all of them.

3. Once all ELF errors are reviewed, click **Save All**.

---

## STEP 3 — Run EAPP to Clear Errors

1. Go back to **EAPP** and run again using **No, No, Yes**.
2. **Repeat Steps 2 and 3** until drilling into "Resolve Person/Address Duplicate" in AIBD shows: *"No records found"*.

---

## STEP 4 — Clear Person Errors (Line 1) and Institution Errors (Line 5)

Once all ELF errors are cleared:

- **MN** = personal info errors (should all show `I`s at this point — if not, repeat steps 2 and 3).
- **IN** = institution info errors.

Only drill into INs that have **`E`s** (errors).

**For Line 1 bio errors:**
- Drill in, review, and enter `Y` or `N` in Combine based on whether it is the same student.
- If two different students share the same SSN:
    1. Drill into the student on the left → go to **NAE** → remove the SSN.
    2. Mark `N` (no) to not merge.
    3. Single Save twice.

**For Line 5 institution errors:**
- Drill in and **always put `Y`**.

---

## STEP 5 — Done!

- Rerun **EAPP**.
- The batch is complete when all **`E`s** are **`I`s**.

---

## Phase 2 Error Examples

### Example 1: Student Has Two Ethnicities
The most common error is when a student has both Hispanic and Non-Hispanic.

1. Cancel out of Phase 2 Error Messages.
2. Go into student record → **NAE**.
3. Select **Line 1 of Ethnic(s)**.
4. Delete Line 1 (should be blank) → Single Save until back at AIBD.

### Example 2: Invalid Student Program (Department)
1. Go to **PROG** and look up the program.
2. Go to **SPRO** and drill into the program → update the department.

### Example 3: Invalid Student Program (Catalog)
1. Let Techs know the program is no longer valid for the current year.
2. Delete the student record and hand-load.

### Example 4: Application Ambiguity Exists
1. Close out of Phase 2 errors and return to the main AIBD screen.
2. **DELETE** this application (put `Y` in the delete column) — write down student info to look up their application on the production site.
3. Load the application manually.

### Example 5: Other Error
- Delete and load manually.

### Example 6: Student Applied for a Program They Already Graduated From
1. **SPRO** → go to program → drill in → add a line for **Inactive**.
2. Process the rest of the batch.
3. Delete the Inactive line.
4. Add a new **liberal arts program** for the student instead.
