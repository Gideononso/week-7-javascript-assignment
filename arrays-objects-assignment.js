// QUESTION 1: Create Student Objects

const students = [
  {
    id: 1,
    name: "Gideon",
    age: 22,
    grades: [85, 92, 78]
  },
  {
    id: 2,
    name: "Alice",
    age: 20,
    grades: [72, 68, 75]
  },
  {
    id: 3,
    name: "Michael",
    age: 21,
    grades: [90, 88, 95]
  },
  {
    id: 4,
    name: "Sarah",
    age: 19,
    grades: [55, 62, 58]
  },
  {
    id: 5,
    name: "David",
    age: 23,
    grades: [45, 52, 48]
  }
];

// Test the students array
console.log("Students:", students);


// QUESTION 2: Calculate Averages

function calculateAverage(grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  const average = total / grades.length;

  return Number(average.toFixed(2));
}

// Add an average property to each student
const studentsWithAverage = students.map(student => {
  return {
    ...student,
    average: calculateAverage(student.grades)
  };
});

// Test the studentsWithAverage array
console.log("Students with Average:", studentsWithAverage);

// QUESTION 3: Filter Passing Students

function getPassingStudents(students) {
  return students.filter(student => student.average >= 60);
}

// Get students with an average of 60 or higher
const passing = getPassingStudents(studentsWithAverage);

// Test the function
console.log("Passing Students:", passing);

// QUESTION 4: Functions & Callbacks

function processStudents(students, callback) {
  return students.map(student => callback(student));
}

function addLetterGrade(student) {
  let letterGrade;

  if (student.average >= 90) {
    letterGrade = "A";
  } else if (student.average >= 80) {
    letterGrade = "B";
  } else if (student.average >= 70) {
    letterGrade = "C";
  } else if (student.average >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  return {
    ...student,
    letterGrade: letterGrade
  };
}

function addStatus(student) {
  return {
    ...student,
    status: student.average >= 60 ? "Pass" : "Fail"
  };
}

// Test addLetterGrade
const studentsWithGrades = processStudents(studentsWithAverage, addLetterGrade);

console.log("Students with Letter Grades:", studentsWithGrades);

// Test addStatus
const studentsWithStatus = processStudents(studentsWithAverage, addStatus);

console.log("Students with Status:", studentsWithStatus);