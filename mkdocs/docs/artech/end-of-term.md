# End of Term

## Checklist

Get from Hung:
- Query for missing hours and grades.
- Make sure all EWs, RWOs, and Grade Changes have been processed.
- All Duplicate Records are resolved.

*See End of Term Manual from Hung and notes.*

---

## Fixing MIS Errors

MIS SX errors will display in a report. Example format:

```
SX error: [Student ID] / [Term] / [CBOO code]
```

**CSXM:**
1. Enter Student ID (listed under ID as Social or D+studentID).
2. Enter term ID under `GI03IdentifierLookUp`.
3. Identify the relevant class based on the CBOO code from the error report.
4. Go to STAC → review and fix the class.
5. Return to CSXM and correct the data there.

### Common Issues

**Invalid Value:** Original registration entry was overwritten by a drop — no initial registration on file.
- Check Reg Audit and add the line back.
- In CSXM, add the reg date under SX01.

**Drop Date:** Student has N or A status but a W on file.
- Check instructor grade book and FGRN.
- If grade book lists a grade: apply it, remove W in STAC and RGCS, add comment, then apply grade.
- If not in grade book: have Dean decide if W should stand (enter drop date) or if instructor needs to grade.
- After STAC corrections, return to CSXM and either enter drop date for W or change W to grade.
