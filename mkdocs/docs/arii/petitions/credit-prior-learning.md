# Credit for Prior Learning

## MAP

---

## Credit By Exam

### Processing Steps

1. Enter Credit By Exam
    - Navigate to **Colleague → TSUM**.
    - Enter the Student ID number.
    - Click into an empty Admissions Test field.
    - Type in `cbe` and press **Enter**.

        ![Enter cbe](../../images/cbe-1.png)

    - For Date Taken, enter the date of submission.

        ![Enter date of submission](../../images/cbe-2.png)

    - Click **Save**, **Update**, and **Ok**.

2. Enter Equivalency
    - Detail into **Equiv**.

        ![Enter course code](../../images/cbe-3.png)

    - Detail into **Course**.

        ![Enter course code](../../images/cbe-4.png)

    - Type in the course code in the Course LookUp field and double-click on the course.

        ![Enter course code](../../images/cbe-5.png)

    - Fill in the following fields.

        | Field | Entry |
        |-|-|
        | Course Level | Type in `A`, `B`, `C`, `D`, or `E` |
        | Gr | Type in `P` or letter grade |
        | Status | Type in `TR` |
        | Credit Type | For College CBE Passes, type in `CBE`; For College CBE Letter Grades, type in `CBEX`; For High School CBE Passes, type in `HSCBE`; For High School CBE Letter Grades, type in `HSCBEX` |
        | Term | Type in the year and semester of the exam (e.g., `2026FA`) |

        ![Fill in the following fields](../../images/cbe-7.png)

    - Click on **Notes/Comments**.

        ![Click on Notes/Comments](../../images/cbe-8.png)

    - Fill in the following fields.

        | Field | Entry |
        |-|-|
        | Notes/Dates | Type in `PLCBE` |

        ![Fill in the following fields](../../images/cbe-9.png)

    - Click **Save All**.

---

## External Exams

### Advanced Placement (AP) Scores

!!! warning
    The student must have grades on the system first. If we add AP scores before the student has any coursework at SAC, we will be adding them with no context. If they are currently taking courses, **wait until the end of the semester**. Classes must be *SAC* courses.

---

#### Processing Steps

1. Check Student Enrollment
    - Navigate to **Colleague → STAC**.
    - Confirm the student has grades on the system before proceeding.
    ![Check Student Enrollment](../../images/ap-scores-1.png)

2. Enter AP Exam Information
    - Navigate to **Colleague → TSUM**.
    - Enter the **Student ID**.
    - Click into an empty Admissions Test field.
    - Enter **`ap...`**
    ![Check Student Enrollment](../../images/ap-scores-2.png)
    - Double-click on the desired test.
    ![Check Student Enrollment](../../images/ap-scores-3.png)

    - Enter the following information in the fields:

        | **Field** | **Instructions** |
        |-----------|------------------|
        | **Date taken** | `05/15` followed by the year the exam was taken |
        | **Scores** | Input the passing score (3–5) |
        | **CSU** | Enter codes |
        | **IGETC** | Enter codes |
        | **AA** | **Do not** enter anything for AA |

        ![Check Student Enrollment](../../images/ap-scores-4.png)

    - Click **Save All**.

3. Update Degree Audit
    - Navigate to **Colleague → EXTS**.
    - Enter the **Student ID**.
    - Select: **Advanced Placement (for Conversion)**
        - If not on the list, type **A** in input and press Enter.
        - *Institution look-up:* `1068036` or **Advanced Placement (for Conversion)**
        - Click **Save**.
        - Click **Update**.
    - Detail into the **first line**.

        ![Check Student Enrollment](../../images/ap-scores-6.png)

    - Enter the following information in the fields:

        | **Field** | **Instructions** |
        |-----------|------------------|
        | **External Course** | Enter AP code |
        | **End Date** | `05/15` followed by the year the exam was taken |
        | **Grade Scheme** | `CC` |
        | **Grade** | `P` |
        | **Term** | Year of exam and `SP` |

        ![Check Student Enrollment](../../images/ap-scores-5.png)

        - Click **Save** and **Update**.
        - Click **Cancel**.
    - Detail into **Equiv**.

            ![Check Student Enrollment](../../images/ap-scores-7.png)

        - Click on the Equivalency line — information will populate.

            ![Check Student Enrollment](../../images/ap-scores-8.png)
            ![Check Student Enrollment](../../images/ap-scores-9.png)

        - Click **Save All**.

4. Check Student's Transcripts
    - Navigate to **Colleague → TRAN**.
    - Check to see if AP scores are updated on the student's transcripts.

---

## Language Proficiency

### Guiding Rule

Students must have **two years of the same foreign language** with a grade of **C- or higher in the last semester**.

!!! note "Note"
    Must be the **same language** (e.g., two years of French — not one year of Spanish and one year of French).

---

### Examples

#### ✅ Meets Proficiency

| Course | Term | Grade |
|--------|------|-------|
| French I | FA17 | B |
| French I | SP18 | C |
| French 2 | FA18 | D |
| French 2 | SP19 | **C-** ← last semester must be C- or higher |

#### ❌ Does Not Meet Proficiency (last semester grade too low)

| Course | Term | Grade |
|--------|------|-------|
| French I | FA17 | B |
| French I | SP18 | C |
| French 2 | FA18 | C |
| French 2 | SP19 | **D** ← below C- |

#### ❌ Does Not Meet Proficiency (different languages)

| Course | Term | Grade |
|--------|------|-------|
| French I | FA17 | B |
| French I | SP18 | C |
| **Spanish I** | FA18 | C |
| **Spanish I** | SP19 | B |

*(Different languages — does not qualify)*

---

### Processing Steps

1. Update Degree Audit
    - Navigate to **Colleague → EXTS**.
    - Enter the Student ID number.
    - Select the student's high school by double-clicking the school.

        ![Double-click the school](../../images/lang-prof-1.png)

    - Detail into a new line.

        ![Detail into a new line](../../images/lang-prof-2.png)

    - Fill in the following fields.

        | Field | Entry |
        |-|-|
        | External Course | Type in `LNG PROF` |
        | End Date | Type 05/31/YY (Spring), 07/31/YY (Summer), or 12/31/YY (Fall) for when the student completed the course |
        | Title | Type in `Language Proficiency` |
        | Credits | Type in `0.00` |

        ![Fill in the fields](../../images/lang-prof-3.png)

    - Click **Save** and **Update**.
    - Click **Cancel**.
    - Detail into **Equiv**.

        ![Detail into Equiv](../../images/lang-prof-4.png)

    - Detail into **Course**.

        ![Detail into Course](../../images/lang-prof-5.png)

    - Type in `LNG PROF` in the Course LookUp field and double-click on `Internal ID 14116`.

        ![Select Internal ID 14116](../../images/lang-prof-6.png)

    - Fill in the following fields.

        | Field | Entry |
        |-|-|
        | Gr | Type in `P` |
        | Status | Type in `TR` |
        | Credit Type | Type in `LP` |

        ![Fill in the following fields](../../images/lang-prof-7.png)

    - Click on **Notes/Comments**.
    - Type in `6` in **IGETC**.

        ![Type in 6 in IGETC](../../images/lang-prof-8.png)

    - Click **Save All**.

    !!! warning "Check Your Work"
        After processing, verify in **TRAN** that the language proficiency appears correctly on the transcript.

## Military Service

### Processing Steps

1. Enter Military Service Credit for Health Education
    - Navigate to **Colleague → TSUM**.
    - Enter the Student ID number.
    - Click into an empty Admissions Test field.
    - Type in `mil-svc` and press **Enter**.

        ![Enter mil-svc](../../images/mil-svc-1.png)

    - Click **Save**, **Update**, and **Ok**.

2. Enter Equivalency
    - Detail into **Equiv**.

        ![Enter course code](../../images/mil-svc-2.png)

    - Detail into **Course**.

        ![Enter course code](../../images/mil-svc-3.png)

    - Type in `mil-svc1` in the Course LookUp field and double-click on the course.

        ![Enter course code](../../images/mil-svc-4.png)

    - Fill in the following fields.

        | Field | Entry |
        |-|-|
        | Course Level | Type in `E` |
        | Credit | Type in `3.00` |
        | Gr | Type in `P` |
        | Status | Type in `TR` |
        | Credit Type | Type in `MS` |

        ![Fill in the following fields](../../images/mil-svc-5.png)

    - Click **Save** and **Update**.

3. Enter Military Service Credit for Exercise Science
    - Click into an empty Admissions Test field.
    - Type in `mil-svc` and press **Enter**.
    - Click **Save**, **Update**, and **Ok**.

4. Enter Equivalency
    - Detail into **Equiv**.
    - Detail into **Course**.

        ![Enter course code](../../images/mil-svc-3.png)

    - Type in `mil-svc2` in the Course LookUp field and double-click on the course.

        ![Enter course code](../../images/mil-svc-6.png)

    - Fill in the following fields.

        | Field | Entry |
        |-|-|
        | Course Level | Type in `E` |
        | Credit | Type in `1.00` |
        | Gr | Type in `P` |
        | Status | Type in `TR` |
        | Credit Type | Type in `MS` |

        ![Fill in the following fields](../../images/mil-svc-7.png)

    - Click **Save All**.

---

## Prior Experience

### Processing Steps

1. Enter Prior Experience
    - Navigate to **Colleague → TSUM**.
    - Enter the Student ID number.
    - Click into an empty Admissions Test field.
    - Type in `cbe` and press **Enter**.

        ![Enter cbe](../../images/cbe-1.png)

    - For Date Taken, enter the date of submission.

        ![Enter date of submission](../../images/cbe-2.png)

    - Click **Save**, **Update**, and **Ok**.
    
2. Enter Equivalency
    - Detail into **Equiv**.

        ![Enter course code](../../images/cbe-3.png)

    - Detail into **Course**.

        ![Enter course code](../../images/cbe-4.png)

    - Type in the course subject and number in the Course LookUp field and double-click on the **active SAC** course.

        ![Enter course code](../../images/cbe-5.png)

    - Fill in the following fields.

        | Field | Entry |
        |-|-|
        | Course Level | Type in `PTCLY` |
        | Gr | Type in `P` |
        | Status | Type in `TR` |
        | Credit Type | For Industry Experience, type in `INDX`; For Portfolio Work, type in `PX`; For Joint Services Transcripts, type in `JSTX` |

        ![Fill in the following fields](../../images/cbe-6.png)

    - Click **Save All**.

---

## TSUM Steps

1. **Admissions Tests → CBE**
   - Press **Enter**.

    !!! note "Screenshot Placeholder"
        TSUM CBE entry screenshot is in the original Word manual.

2. **Date Taken**
   - Enter the **date of submission**.

3. **Save → click Update**

4. **Test LookUp → click OK**

5. **Detail into Equiv**

6. **Detail into Course**
   - **Course LookUp:** Enter and select the course.
   - **Course Level:** Try A–E until something takes.
   - **Gr:** `P`
   - **Status:** `TR`
   - **Credit Type:** Choose one from the table below.
   - **Save All**

### Credit Type Codes

| Code | Description |
|------|-------------|
| `JSTX` | Military Credit |
| `MSX` | Military Service |
| `APX` | Advanced Placement |
| `IBX` | International Baccalaureate |
| `CLEPX` | College-Level Examination Program |
| `PX` | Portfolios |
| `WEX` | Work Experience |
