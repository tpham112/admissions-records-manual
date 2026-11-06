# Transfer Unit Scenarios & Verification

[← Courses to ignore](transcript-transfer-unit-course-review.md) · [Transcript overview](transcript-overview.md)

## Evaluating External Courses That Match Local Courses

Compare the external coursework against the student's local RSCCD coursework. This review prevents duplicate degree credit while ensuring that all attempted coursework is captured for Financial Aid Satisfactory Academic Progress (SAP).

!!! important "Core Rule"
    **Always capture all attempted units, but never award completed units more than once for equivalent coursework.**

## Transfer Totals Columns

Use the following order when entering Transfer Totals:

| Column | Enter |
|----------|----------|
| First Column | Attempted Units |
| Second Column | Completed Units |
| Third Column | GPA Units |
| Fourth Column | Grade Points |

!!! warning "Transfer Totals and EXTS Are Separate Decisions"
    Entering a course in Transfer Totals is not the same as entering the external course in EXTS. Follow the applicable scenario below to determine both actions.

## Determine the Applicable Scenario

### Scenario 1: Local Fail + External Pass

Use this scenario when:

- The student earned a local **F**, **D**, or **NP**; and
- The student later completed an equivalent external course with an **A**, **B**, **C**, or **P**.

#### Transfer Totals Entry

Calculate the external course exactly as reported on the external transcript:

- Full Attempted Units (first column)
- Full Completed Units (second column)
- Full GPA Units (third column)
- Full Grade Points (fourth column)

#### EXTS Action

- Enter the external course in **EXTS**.
- Use the external course to support repeat/alleviation processing.
- Complete the STAC updates described below.

#### Result

- Degree credit is awarded from the external passing course.
- The local GPA impact is removed.
- The student's record reflects successful course completion.
- Both attempts remain represented for Financial Aid SAP purposes.

---

### Scenario 2: Local Pass + External Pass (Duplicate Credit)

Use this scenario when the student already earned passing credit locally and later completed an equivalent course externally.

#### Transfer Totals Entry

Enter:

- Full Attempted Units (first column)
- **0.00 Completed Units** (second column)
- **0.00 GPA Units** (third column)
- **0.00 Grade Points** (fourth column)

#### EXTS Action

- **Do not** enter the external course in **EXTS**.
- Leave the local passing course unchanged.

#### Result

- The external attempt is captured.
- Degree credit is not awarded twice.
- Financial Aid can still see the additional attempt.

!!! warning "Do Not Award Duplicate Credit"
    Completed units should not be awarded for an external course when the student has already received passing credit for the equivalent RSCCD course.

---

### Scenario 3: All Other Scenarios (Standard Transfer Processing)

This includes:

- Local Pass + External Fail
- Local Fail + External Fail
- External Pass (No Local Match)
- External Fail (No Local Match)
- Any situation that does not create duplicate passing credit

#### Transfer Totals Entry

Enter all units exactly as reported on the external transcript:

- Attempted Units
- Completed Units
- GPA Units
- Grade Points

A failed course will typically have attempted units but **0.00 completed units**.

#### EXTS Action

- Enter the external course in **EXTS**.

#### Result

- The transfer record accurately reflects the external institution.
- Financial Aid SAP calculations remain compliant.
- No duplicate passing credit is created.

---

## At-a-Glance Cheat Sheet

| Scenario | Transfer Totals Entry | EXTS Action | Result |
|-----------|-----------|-----------|-----------|
| **Local Fail + External Pass** | Full Attempted + Full Completed + Full GPA Units + Full Grade Points | Enter in EXTS | GPA alleviated, degree credit awarded, both attempts retained |
| **Local Pass + External Pass** | Full Attempted Units + 0.00 Completed Units + 0.00 GPA Units + 0.00 Grade Points | Do Not Enter | Prevents duplicate degree credit while retaining attempt |
| **All Other Scenarios** | Enter all values exactly as reported | Enter in EXTS | Standard transfer processing |

## Local Fail + External Pass: Automatic Renewal Steps

After transferring the external course and entering it in **EXTS**, update the equivalent local failed course.

1. Open **STAC** and locate the student.
2. Detail into the applicable local failed course.
3. Update **Credit Type** to:

    ```
    AR
    ```

4. Update **Replace Allowed** to:

    ```
    N
    ```

5. Detail into **Notes/Comments**.
6. In **Notes/Dates**, enter:

    ```
    TRR
    ```

7. In **Printed Comments**, enter:

    ```
    Repeated at [External College Name]
    ```

    Example:

    ```
    Repeated at Orange Coast College
    ```

8. Save and exit.

### Result

- The local failed course is properly coded for repeat/alleviation processing.
- The local GPA impact is removed through the external passing completion.
- Degree credit is awarded based on the external passing course.
- Financial Aid SAP continues to reflect both attempted enrollments.

## STAC Quick Reference

| Field | Value |
|---------|---------|
| Credit Type | AR |
| Replace Allowed | N |
| Notes/Dates | TRR |
| Printed Comments | Repeated at [External College Name] |

## Transfer Unit Scenario Verification Checklist

Use this checklist to verify the applicable transfer unit scenario and its required actions. Confirm the items when those actions have been completed:

- External course was entered correctly in Transfer Totals.
- Appropriate EXTS action was taken.
- Duplicate passing credit was not awarded.
- Attempted units were captured.
- Completed units were not counted twice.
- STAC updates were completed when applicable.
- Financial Aid SAP requirements remain satisfied.

!!! note "Key Principle"
    Always capture all attempted units, but never award completed units more than once for equivalent coursework.

## Next Step

Continue to [Calculating Transfer Units](transcript-transfer-unit-calculation.md) to finish the evaluation, then follow the link there to Total Transfer Unit Processing for entry.
