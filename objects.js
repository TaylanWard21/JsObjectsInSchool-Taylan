var id = 1;

var Person = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

};
Student.prototype = new Person();
Teacher.prototype = new Person();

function Student (firstName, lastName, grade){
    this.id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;



}

 function Teacher(firstName, lastName, subject){
    this.id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;

}

function Section(sectionName,sectionCount) {
    this.sectionName = sectionName;
    this.sectionCount = sectionCount;
    this.students = [];
    this.teacher = [];
    this.id++;
    this.seatRemaining = this.sectionCount - this.students.length;
    this.addStudentSection = function(student) {
        this.students.push(student);
        console.log(this.students);
        console.log(this.students[0]);
        this.sectionCount++;
        this.seatRemaining--;
        if(this.seatRemaining==-1){
            document.getElementById("bad").innerHTML = "Not Valid .";
        }
    };
    this.removeStudentSection = function(student) {
        this.students.splice(student);
        this.seatRemaining++;
        if(this.seatRemaining>this.sectionCount){
            document.getElementById("wrong").innerHTML = "Can't be removed."
        }
        console.log(this.students);
    };
    this.addTeacherSection = function(teacher) {
        this.teacher.push(teacher);
        console.log(this.teacher);
    };
    this.removeTeacherSection = function(teacher) {
        this.teacher.splice(teacher);
        console.log(this.teacher);

    }
}