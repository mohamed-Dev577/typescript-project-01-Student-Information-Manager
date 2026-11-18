import type { Student } from "./types/student.js";

const student: Student = {
  id: 1,
  name: "Ali",
  age: 15,
  grade: "3rd Preparatory",
  email: "ali@example.com",
};
console.log(student);

let students: Student[] = []

students.push(student);

console.log(students.length);

const student2: Student = {
    id: 2,
    name: "Mohamed",
    age: 16,
    grade: "1st Secondary",
    email: "mohamed@example.com",
}

const student3: Student = {
    id: 3,
    name: "Ahmed",
    age: 17,
    grade: "2nd Secondary",
    email: "ahmed@example.com",
}



console.log(student2);

students.push(student2);
students.push(student3);
 
const updateId = 2;
const updatedStudents = students.map(student => {
    if (student.id === updateId) {
        return {
            ...student,
            name: "Updated Name",
            age: 18,
            grade: "3rd Secondary",
            email: "updatename@example.com",
        };
    }

    

    return student;
});

students = updatedStudents;
console.table(students);

console.table(updatedStudents);

students = students.filter(student => student.id !== 2);
console.table(students);

console.log(students.length);

for (const student of students) {
    console.log(student.name);
}

const searchId = 2;
const foundStudent: Student | undefined = updatedStudents.find(student => student.id === searchId);

console.log(foundStudent);

if(foundStudent){
  console.log(foundStudent.name);
} else{
    console.log("Student not found");
}

function addStudent(student: Student): void {
    students.push(student);
}