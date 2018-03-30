
 //this.addStudentToSection = function(studentId, sectionId){





 //this.removeStudentFromSection = function(studentId, sectionId){



 //this.getStudentObjFromId = function(studentId){



 //this.getTeacherObjFromId = function(teacherId){



//this.getSectionObjFromId = function(sectionId){


function listItems() {
    var list = document.getElementById("list").value;
    var items = allItems[list];
    var result = "";

    if (list == 0){
        studentList();
        
    }

    if(list == 1){
        teacherList();


    }
    if(list == 2){
        sectionList();

    }


}

function teacherList(){
    var html = "<table border = '1'>";
    for(var i = 0; i < allTeachers.length; i++){
        html += "<tr>";
        html+= "<td>" + allTeachers[i].firstName + "</td>";
        html+= "<td>" + allTeachers[i].lastName + "</td>";
        html+="<td>" + allTeachers[i].subject + "</td>";
        html+="</tr>";

    }
    html+= "</table>";
    document.getElementById("listOutput").innerHTML = html;
}
 function studentList(){
     var html = "<table border = '1'>";
     for(var i = 0; i < allStudents.length; i++){
         html += "<tr>";
         html+= "<td>" + allStudents[i].firstName + "</td>";
         html+= "<td>" + allStudents[i].lastName + "</td>";
         html+="<td>" + allStudents[i].grade + "</td>";
         html+="</tr>";

     }
     html+= "</table>";
     document.getElementById("listOutput").innerHTML = html;
 }
 function sectionList(){
     var html = "<table border = '1'>";
     for(var i = 0; i < allSections.length; i++){
         html += "<tr>";
         html+= "<td>" + allSections[i].sectionName + "</td>";
         html+= "<td>" + allSections[i].sectionCount+ "</td>";

         html+="</tr>";

     }
     html+= "</table>";
     document.getElementById("listOutput").innerHTML = html;
 }


function makeLists() {
    for(var i=0;i< allItems[0].length;i++) {
        document.getElementById("studentList").innerHTML +=
            "<option>" + allItems[0][i].firstName + " " + allItems[0][i].lastName + "</option>"
    }
    for(var i=0;i< allItems[0].length;i++) {
        document.getElementById("studentList2").innerHTML +=
            "<option>" + allItems[0][i].firstName + " " + allItems[0][i].lastName + "</option>"
    }
    for(var l=0;l < allItems[1].length;l++) {
        document.getElementById("teacherList").innerHTML +=
            "<option>" + allItems[1][l].firstName + " " + allItems[1][l].lastName + "</option>"
    }
    for(var l=0;l < allItems[1].length;l++) {
        document.getElementById("teacherList2").innerHTML +=
            "<option>" + allItems[1][l].firstName + " " + allItems[1][l].lastName + "</option>"
    }
    for(var k=0;k<allItems[2].length;k++) {
        document.getElementById("sectionList").innerHTML +=
            "<option>" + allItems[2][k].sectionName + " " + allItems[2][k].sectionCount + "</option>"
    }
    for(var k=0;k<allItems[2].length;k++) {
        document.getElementById("sectionList2").innerHTML +=
            "<option>" + allItems[2][k].sectionName + " " + allItems[2][k].sectionCount + "</option>"
    }
    for(var k=0;k<allItems[2].length;k++) {
        document.getElementById("sectionList3").innerHTML +=
            "<option>" + allItems[2][k].sectionName + " " + allItems[2][k].sectionCount + "</option>"
    }
    for(var k=0;k<allItems[2].length;k++) {
        document.getElementById("sectionList4").innerHTML +=
            "<option>" + allItems[2][k].sectionName + " " + allItems[2][k].sectionCount + "</option>"
    }

}

 function addStudents(){
     var firstName = document.getElementById("firstNameStudent").value;
     var lastName = document.getElementById("lastNameStudent").value;
     var grade = document.getElementById("studentGrade").value;
     allStudents.push(new Student(firstName,lastName,grade));
     document.getElementById("added").innerHTML = "Student Added";
     clear();
 }

 function addTeachers(){
     var firstName = document.getElementById("firstNameTeacher").value;
     var lastName = document.getElementById("lastNameTeacher").value;
     var teacherSubject = document.getElementById("teacherSubject").value;
     allTeachers.push(new Teacher(firstName,lastName,teacherSubject));
     document.getElementById("added").innerHTML = "Teacher Added";
     clear();
 }
 function addSections(){
     var sectionName = document.getElementById("sectionName").value;
     var sectionCount = document.getElementById("sectionCount").value;
     allSections.push(new Section(sectionName,sectionCount));
     document.getElementById("added").innerHTML = "Section Added";
     clear();
 }


function removeSections(){
    var sectionName = document.getElementById("ya").value;
    var sectionAmount = document.getElementById("ka").value;

    allSections.pop(new Section(sectionName, sectionAmount));
    document.getElementById("no").innerHTML = "Section Released";
    clear();

}
 function addStudentToSection(){
     var studen = document.getElementById("studentList").selectedIndex;
     var student = allStudents[studen];
     var listNum = document.getElementById("sectionList").selectedIndex;
     var section = allSections[listNum];
     console.log(section);
     section.addStudentSection(student);

 }

 function removeStudentFromSection(){
     var studen = document.getElementById("studentList2").selectedIndex;
     var student = allStudents[studen];
     var listNum = document.getElementById("sectionList2").selectedIndex;
     var section = allSections[listNum];
     console.log(section);
     section.removeStudentSection(student);
 }
 function addTeacherToSection(){
     var teach = document.getElementById("teacherList").selectedIndex;
     var teacher = allTeachers[teach];
     var listNum = document.getElementById("sectionList").selectedIndex;
     var section = allSections[listNum];
     console.log(section);
     section.addTeacherSection(teacher);
 }
 function removeTeacherFromSection(){
     var teach = document.getElementById("teacherList2").selectedIndex;
     var teacher = allTeachers[teach];
     var listNum = document.getElementById("sectionList2").selectedIndex;
     var section = allSections[listNum];
     console.log(section);
     section.removeTeacherSection(teacher);
 }

 function clear() {
     var elements = document.getElementsByTagName("input");
     for (var i=0; i<elements.length; i++) {
         if (elements[i].type == "text") {
             elements[i].value = "";
         }
     }
 }

 function showList() {
     document.getElementById("Selector").style.display = "inline";
     document.getElementById("selectBox").style.display = "none";
     document.getElementById("addT").style.display = "none";
     document.getElementById("removed").style.display = "none";
 }

 function add(){
     document.getElementById("addT").style.display = "inline";
     document.getElementById("selectBox").style.display = "none";
     document.getElementById("Selector").style.display = "none";
     document.getElementById("removed").style.display = "none";


 }
 function showAdd(){
     document.getElementById("selectBox").style.display = "inline";
     document.getElementById("Selector").style.display = "none";
     document.getElementById("addT").style.display = "none";
     document.getElementById("removed").style.display = "none";



 }
 function showRemove(){
     document.getElementById("removed").style.display = "inline";
     document.getElementById("Selector").style.display = "none";
     document.getElementById("addT").style.display = "none";
     document.getElementById("selectBox").style.display = "none";

 }




