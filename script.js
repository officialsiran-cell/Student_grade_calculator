function calculateGrade(){

    let name =
    document.getElementById("name").value;

    let mark =
    parseInt(document.getElementById("mark").value);

    let grade;

    if(mark >= 75)
        grade = "A";

    else if(mark >= 65)
        grade = "B";

    else if(mark >= 50)
        grade = "C";

    else
        grade = "F";

    document.getElementById("result").innerHTML =
    name + " obtained Grade " + grade;
}
