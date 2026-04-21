# Dual Enrollment

## Open Section Enrollment — Soft Student Onboarding

Provide each student submitting a Special Admit Form / Add Card with the handout on how to create an account on [sac.dualenroll.com](https://sac.dualenroll.com) and how to register/drop classes.

- Student must have an **active application** (SSO login required).
- Students will create their on-time profile (including parent approval).
- Each registration request routes first to the HS counselor for approval, before being submitted to Colleague.
    - Remind students to be in touch with their HS counselor and watch for the approval request email.

---

## Dual Enrollment Students With Expired Dates

- Verify that they are still high school students.
- Update COAF and enter a new year with Active status.

---

## Home-School Students

Students selecting "Home School" as their high school will be:

- Prompted to enter a School Approver — with an option to select **"Parent is Home School Approver"**.
    - A link is sent to the home school approver to upload the homeschool affidavit.
- System creates a step: **Review Homeschool Affidavit** (routed to A&R).
    - A&R staff review and approve the affidavit before registration activity routes forward.
    - Homeschool Affidavit is saved on the student profile under "Documents" tab.

---

## A&R Error Resolution

A&R Staff selects "Other HS not listed" and/or "Homeschool" in the Registration Tab.

The following errors (marked in yellow) are resolved by A&R staff:

| Error Text | Resolution |
|-----------|------------|
| Course Filled. Either add to wait list or look for an available section. | Send back to student to select different section or request waitlisting |
| Section XXX is "Waitlist Full" (20/20). | Send back to student to select different section |
| Registration not allowed in CC courses without an academic program. | Check Academic Program Status (ASUM/SPRO) |
| The registration period has ended. An add code is required during the "Add" period. | Send back to student with Add Auth info |
| This Section was cancelled on XXX. | Send back to student to select different section |
| You can't place XXX on the schedule at this time | Check section dates — send back to student with info |
| This course is a repeat and does not meet the allowed grades requirement. | Check for course repetition and update student |
| Section XXX is "Closed" (40/40). | Send back to student to select different section |
| The following required prerequisite for course XXX is not started. | Inform student of missing prereq; advise to contact SAC Assessment Center for DualEnrollment counselor appointment. Unofficial transcript required. |
| This course is reserved for students at [specific high school]. | Send back to student to select different section. Provide explanation. |
| The following required requisite for course XXX is not fully met. | Inform student of missing prereq; advise DualEnrollment counselor appointment. Unofficial transcript required. |
| You have not met the 3.0 GPA requirement to enroll in an honors course. | Send back to student to select different section |
| Student does not have a student number | Check student has valid (MS) CC Application processed |
| PERSON.ST record with ID 'XXXXXXX' is locked. | Cancel out of student file in Colleague, resubmit |
| Error submitting drop: You do not have permission to remove courses during the reg period | Check possible reason and update student |
| Could not drop student from course section XXX — student not registered | Check STAC if student already dropped; terminate attempt |
| SAC Student record does not currently list a valid active Organization Membership (CORM) for this registration. Review and edit memberships as applicable. | Enter `1DUAL` flag for student with requested term start date and requested term end date for the following year. E.g., Start Date: 2026SU, End Date: 2027SU. Make sure to also enter STPE waiver for the course as well. |

!!! info
    All other errors are resolved by the DuE Team. Reach out for questions.

### How to Process Errors

1. Click on the error message (highlighted in yellow).
2. Take corrective action in Colleague if applicable.
3. Select the relevant action in dualenroll.com.
4. Add comments (mandatory when returning to student, HS counselor, or terminating).
5. Click **COMPLETE STEP**.

---

## Processing Special Admit Forms & Add Cards

### Single Enrollments

1. **Upload documents to Laserfiche** — Add Card and/or Special Admit Form under the appropriate term folder.

2. **If student had a Special Admit Form, flag in COAF:**
    - Open **COAF** in Colleague → search for student.
    - Under **Member Of**, enter **`1CAPF`** → press Enter.
    - Set **Start Date and End Date** to match the semester term dates (use term abbreviation to auto-populate, e.g., `2025SP`).
    - Save and exit.

3. **Enter waiver in STPE** — check start dates and home location of the course.

4. **Register the student** into the requested section.
    - If full: do not register — let student know to register in another section or waitlist.

---

### Batch Enrollments

1. **Download documents to M Drive** — batch enrollment Add Cards and Special Admit Forms for the term.

2. **Batch-flag Special Admit Form students in COAF:**
    - SLED → load Student IDs with Special Admit Forms.
    - **AASM** → apply **`1CAPF`** flag for the appropriate semester.
    - Save and exit.

3. **Batch Registration:**
    - Load Student IDs in **SLED**.
    - Load section in **SCBL**.
    - Batch-register under **ARSTAFF** reg group in **Non-Update mode** to check errors.
    - Remove students with non-reg-restriction errors from SLED.
    - Run Non-Update mode again to double-check.
    - Run final batch-register with bypass.

---

## Registration into Closed Sections During Add Period

Staff may override the registration restriction for **closed dual enrollment sections designated for specific high schools** only when **all** of the following criteria are met:

| Criterion | Requirement |
|-----------|-------------|
| ✅ Dual Enrollment Office Approval | All DE Office registration requests for the section have been fully processed |
| ✅ Course Modality | Course must be **fully online** (not hybrid or in-person) |
| ✅ Student Eligibility | Student is from **another high school** or is **home-schooled** |
| ✅ Timing & Instructor Approval | Request is during the **add period** and instructor add authorization is on file |

If **all criteria are met** → proceed to register.
If **any criterion is not met** → do **not** override. Refer to the Dual Enrollment Office.
