console.log("sanity check");

var numStudents = prompt("What is the total number of users, using javascript?");

var studentArr = [];

for (var i = 0; i < numStudents; i++) {
  var contactInfo = {name: "", phoneNumber: "", city: ""};
  var studentName = prompt("What is your full name?");
  var studentPhone = prompt("What is your phone number?", "XXX-XXX-XXXX");
  var studentCity = prompt("What city are you from?");

  contactInfo.name = studentName;
  contactInfo.phoneNumber = studentPhone;
  contactInfo.city = studentCity;
  studentArr.push(contactInfo);
}

var numMentors = prompt("What is the total number of mentors, for using javascript?");

var mentorArr = [];

for (var i = 0; i < numMentors; i++) {
  var contactInfo = {name: "", phoneNumber: "", city: ""};
  var mentorName = prompt("What is your full name?");
  var mentorPhone = prompt("What is your phone number?", "XXX-XXX-XXXX");
  var mentorCity = prompt("What city are you from?");

  contactInfo.name = mentorName;
  contactInfo.phoneNumber = mentorPhone;
  contactInfo.city = mentorCity;
  mentorArr.push(contactInfo);
}

alert("The total number of students learning javascript are " + numStudents);

for (var i = 0; i < numStudents; i++) {
  alert("Name: " + studentArr[i].name + "\nPhone Number: " + studentArr[i].phoneNumber + "\nCity: " + studentArr[i].city);
};

alert("The total number of mentors with javascript are " + numMentors);

for (var i = 0; i < numMentors; i++) {
  alert("Name: " + mentorArr[i].name + "\nPhone Number: " + mentorArr[i].phoneNumber + "\nCity: " + mentorArr[i].city);
};
