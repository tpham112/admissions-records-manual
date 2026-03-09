# Logging Transcripts and Test Scores in IASU

## Steps

1. Go to **IASU** and search for the institution where the transcript comes from.

2. **If the institution is in IASU:** Drill in and log the transcript using the fields below.

3. **If the institution is NOT in IASU:** Enter the school's name on a new line, then choose the school code that matches the name and address on the transcript legend.

!!! note "Screenshot Placeholder"
    Screenshots of the IASU entry screen are in the original Word manual. Add them here when available.

---

## Field Reference

| Field | What to Enter |
|-------|---------------|
| **Transcript type** | Pick the code that applies: College / High School / International transcript / External exams (AP/IB/CLEP Scores) |
| **Date received** | Current date |
| **Status** | `RECD` — Official Received |
| **Year attended** | Year of first and last term attended |
| **Start/End dates** | See semester date codes below |
| **Degree received** | Enter if Associate's or Bachelor's degree is found on transcript |
| **Comment** | Timestamp + note (use one of the source codes below) |

### Semester Date Codes

| Semester | Start Date | End Date |
|----------|-----------|----------|
| Summer | 06/01/YY | 07/31/YY |
| Fall | 08/01/YY | 12/31/YY |
| Intersession / Spring | 01/01/YY | 05/31/YY |

### Comment Source Codes

Use one of these codes in the comment:

- `Parchment`
- `XAP`
- `adm email`
- `counter`

### Degree Entry

Drill into the degree box → degree date → type `...` (3 dots) → click to choose a degree code → click Open → enter the degree earned date → single Save → Update.

---

## Important Notes

!!! warning "Multiple Entries"
    Make sure to click on **1** and **Insert a new line** if there are already entries — do not overwrite existing records.

### District Transcripts with Multiple Institutions
If you receive a transcript from a school district with multiple institutions, **add all institutions the student attended** to IASU. Refer to the transcript legend for school codes.

Common district transcripts include:
- Riverside Community College District
- Los Angeles Community College District
- San Diego Community College District

---

## Duplicate Transcripts

If a transcript was previously submitted:

1. Check Laserfiche for the original transcript — verify dates attended and units completed.
2. **If no change:** Add `(Duplicate)` to the timestamp comment and at the end of the filename.
   - Example: `Norris, Chuck (Duplicate)_1711846_Fullerton college`
3. **If there is a change:** Update Start/End dates.
