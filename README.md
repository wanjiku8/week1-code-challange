# Week 1 - Code Challenges

This repository contains JavaScript solutions to Week 1's coding challenges. Each challenge addresses a specific real-world scenario and provides a practical solution using programming concepts.

---

## Challenges Overview

### 1. **Student Grade Generator**
A program to calculate a student's grade based on their marks.

#### **Details**
- **Input**: Marks ranging from `0` to `100`.
- **Output**: Corresponding grade:
  - **A**: Marks greater than `79`.
  - **B**: Marks between `60` and `79` (inclusive).
  - **C**: Marks between `50` and `59` (inclusive).
  - **D**: Marks between `40` and `49` (inclusive).
  - **E**: Marks below `40`.

---

### 2. **Speed Detector**
A program that evaluates a car's speed and issues warnings or demerit points.

#### **Details**
- **Input**: The car's speed (in km/h).
- **Output**:
  - Prints `"Ok"` if the speed is `70 km/h` or below.
  - Adds `1 demerit point` for every additional `5 km/h` above `70`.
  - Prints `"License suspended"` if demerit points exceed `12`.

---

### 3. **Net Salary Calculator**
A program to compute an employee's net salary after statutory deductions.

#### **Details**
- **Input**: Basic salary and additional benefits.
- **Output**:
  - **Gross Salary**: The sum of basic salary and benefits.
  - **PAYE**: Tax deduction based on applicable tax brackets.
  - **NHIF Deduction**: Health insurance deduction as per NHIF rates.
  - **NSSF Deduction**: Pension fund deduction as per NSSF rates.
  - **Net Salary**: The amount remaining after all deductions.

---

## Usage Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/week1-code-challenges.git

2. Navigate to the project directory
   
   cd week1-code-challenges

3. Run the solutions using Node.js
   node studentGradeGenerator.js
   node speedDetector.js
   node netSalaryCalculator.js

