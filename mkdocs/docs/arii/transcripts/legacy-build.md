# Legacy Transcript Colleague Build

Use this procedure when a transcript request comes in for a student whose record predates the current Colleague system.

---

## Step 1 — Search for Existing Record

1. If no record is found in Colleague, check for an old record in **Laserfiche** (search by name, DOB, or SSN).
2. If not found in Laserfiche, check the **Black/Blue books** in the breakroom.

!!! note "Vault Records"
    There are still some records in the vault that have not been scanned yet. For additional support, see **Amber Stapleton**.

!!! note "Screenshot Placeholder"
    Screenshots of sample old transcripts are in the original Word manual. Add them here when available.

---

## Step 2 — Build the Colleague Profile

### NAE — Name Search
- Go to **NAE** and perform a name search.
- If no record found → Click **Add**.
- Add: Name, Social Security Number, Sex, Birthday.

!!! note "Screenshot Placeholder"
    NAE entry screenshot is in the original Word manual.

### ASUM / SHAP
- **ASUM:** Drill into the first line on **Acad Program**.
- **SHAP:** Follow the steps in the original Word manual screenshots.

!!! note "Screenshot Placeholder"
    ASUM and SHAP screenshots are in the original Word manual.

### DADD — Alternative IDs
- Add the student's **Perm. No.** to Alternative IDs.
- Add `000` or copy the "Student ID" from the Laserfiche metadata.
- **Type:** `CPERM`

### SPRO — Deactivate Academic Program

!!! danger "Important"
    Deactivate the Academic Program in SPRO before proceeding.

!!! note "Screenshot Placeholder"
    SPRO deactivation screenshot is in the original Word manual.

---

## Step 3 — TRRQ (Transcript Requests)

!!! info
    **Skip this step if the old transcript does NOT list a transcript request.**

- If more than two transcript requests are on the old transcript, only enter the **first two** to show that the student already used their two free transcripts.

| Field | Value |
|-------|-------|
| **For transcript sent to another school** | ID/Name: name of school; use `1M` or `1C` |
| **For "Personal" transcripts** | ID/Name: "Official Transcript" code; Deliv Method: `1X` |
| **Date Produced / Request Date** | Date shown on the transcript |
| **No of Copies** | Number of copies requested on the transcript |
| **Print Now** | **NO** |
| **Comments** | Do NOT timestamp — leave comment: `Build Laserfiche record 000(Perm. No.)` |

!!! note "Screenshot Placeholder"
    TRRQ entry examples are in the original Word manual.

---

## Step 4 — Add Colleague ID to Laserfiche

- When the Colleague profile is complete, **add the Colleague ID to the metadata** of the old transcript in Laserfiche.
- If the transcript order came from Parchment, add the Colleague ID as both the **Verify ID** and **Unverified ID**.

---

## Step 5 — Email AR Technician

Email the **AR Technician** the Built Laserfiche Form along with the Laserfiche transcript so the old transcript can be merged into the student's Colleague record.

---

## Important Restriction

!!! warning
    Legacy transcripts can **only** be mailed or picked up in person by the student. If a request is made for an electronic transcript, **cancel the order** and leave the following note:

    *"The student has a record from before 1996. Hard copy transcript only. Please resubmit a mailed transcript request."*
