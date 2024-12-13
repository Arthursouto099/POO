// class School {
//     private _courses: Array<Course> = []

//     constructor(public name: string, _courses: Array<Course> = [] ) {
//         this._courses = _courses
//     }

//     public addCourse(course: Course) {
//         this._courses.push(course)
//     }

//     public getCourses() {
//         return this._courses
//     }
  
// }


// class Course {
//     private _Students: Array<Student> = []

//     constructor(public professor: Professor,public  institution: School | null, public courseName: string, public description: string, students: Array<Student>  ) {
//         this._Students = students
//         professor.course = this
//         students.forEach(student => {this.enrollStudent(student)})
//         if(institution !== null) { institution.addCourse(this)}
       
        
//     }

//     getStudents() {
//         return this._Students
//     }

//    public enrollStudent(student: Student) {
//     student.course = this
//     student.registration = Math.floor(Math.random() * 5000)
//     return student
//    }

//    public addStudent(student: Student) {
//      this._Students.push(this.enrollStudent(student)) 
//    }

   
// }

// class Person {
//     constructor(public name: string, public age: number, public cpf: string) {}
// }

// class Professor extends Person {
//     constructor(public name: string, public age: number, public cpf: string, public course: Course | null) {
//         super(name, age, cpf)
//     }
// }

// class Student extends Person {
//     constructor(public name: string, public age: number, public cpf: string, public registration: number | null, public course: Course | null ) {
//         super(name, age, cpf)
//     }
// }

// const school: School = new School("name")
// const professorOne:Professor = new Professor("Gustavo", 40, "157-282-333-99", null)
// const studentOne: Student = new Student("Arthur Santos", 17, "142-777-278-88", null, null)
// const studentTwo: Student = new Student("Lucas", 19, "888-999-999-99", null,null)




// const courseOne: Course = new Course(professorOne, school, "Desenvolvimento de Sistemas", "Desenvolve muito", [studentOne] )
// courseOne.addStudent(studentTwo)

// console.log(courseOne.getStudents())
// console.log(school.getCourses())