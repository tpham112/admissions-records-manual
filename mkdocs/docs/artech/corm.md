# CORM — Campus Organization Management

## Why Track Semester by Semester

Tracking students in special programs on a semester-by-semester basis ensures:

- **Accurate reporting** — meets funding, compliance, and audit requirements.
- **Flexibility** — accurately reflects students who leave and rejoin programs.
- **Funding alignment** — many grants are tied to term-based participation.
- **Consistency** — aligns with course enrollment and other institutional processes.
- **Historical insight** — supports grant applications and accreditation reviews.

!!! tip
    Keep an internal department Excel sheet tracking your students to upload into CORM for campus-wide tracking. Each semester, upload current students into the current term.

---

## CORM Flag Classes

- **Tracking**
- **Registration**
- **Priority Registration**

---

## A0205 Query

| Field | Returns |
|-------|---------|
| **Term** | All students in that flag with a Membership Period for that term |
| **Start/End Date** | All students with Membership Periods falling within the specified range |

---

## Assigning Flags Per Student

Used during Early Decision to add students to CORM so they can register on their own. Roles and rules must be assigned (see Teams folder on setting rules and roles).

Example: `1PUEN` = PUENTE

**CORM:** Go to a blank row on Member → enter student number.

**COMD:**
- Membership Periods: Enter term (e.g., `2024FA`) → status `ACTV` (Active).
- Roles: `A` (Active) — State Date: enter term → Status: `ACTV`.
- **Save All.**

---

## Bulk Flagging of Students

**SLED** — Create list.

**AASM — Auto Assign Membership:**
- **Campus Org:** Enter your program.
- **State date:** Enter term (e.g., `2024SP` or `2024FA`) — dates will auto-populate.
- **Save List Name:** Name used in SLED.

!!! info
    Set Role to **Active** if registration rules will apply. Does NOT need to be Active if no rules apply (e.g., for Early Decision `1EDPR` and `1EADE`).

---

## Creating CORM Flags

**COMT:**
- Start always with **`1`** for SAC.
- Add description.
- Type `...` → `1ADM`.

---

## Creating CORM Registration Rules

**RLDE:** Copy template.

!!! note "Screenshot Placeholder"
    RLDE template screenshots are in the original Word manual.
