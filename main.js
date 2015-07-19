console.log("sanity check");

var studentArr = [];

function students() {
  var contactInfo = {name: "", phoneNumber: "", city: ""};
  var studentName = prompt("What is the student's full name?");
  var studentPhone = prompt("What is the student's phone number?", "XXX-XXX-XXXX");
  var studentCity = prompt("What city is the student from?");

  contactInfo.name = studentName;
  contactInfo.phoneNumber = studentPhone;
  contactInfo.city = studentCity;
  studentArr.push(contactInfo);

  var anotherStudent = prompt("Would you like to add another student?", "yes or no");

  if (anotherStudent.toUpperCase() === "YES") {
    students();
  }
}

students();

var mentorArr = [];

function mentors() {
  var contactInfo = {name: "", phoneNumber: "", city: ""};
  var mentorName = prompt("What is the mentor's full name?");
  var mentorPhone = prompt("What is the mentor's phone number?", "XXX-XXX-XXXX");
  var mentorCity = prompt("What city is the mentor from?");

  contactInfo.name = mentorName;
  contactInfo.phoneNumber = mentorPhone;
  contactInfo.city = mentorCity;
  mentorArr.push(contactInfo);

  var anotherMentor = prompt("Would you like to add another mentor?", "yes or no");

  if (anotherMentor.toUpperCase() === "YES") {
    mentors();
  }
}

mentors();

alert("The total number of students learning javascript are " + studentArr.length);

for (var i = 0; i < studentArr.length; i++) {
  alert("Name: " + studentArr[i].name + "\nPhone Number: " + studentArr[i].phoneNumber + "\nCity: " + studentArr[i].city);
};

alert("The total number of mentors with javascript are " + mentorArr.length);

for (var i = 0; i < mentorArr.length; i++) {
  alert("Name: " + mentorArr[i].name + "\nPhone Number: " + mentorArr[i].phoneNumber + "\nCity: " + mentorArr[i].city);
};
