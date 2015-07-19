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

alert("The total number of students learning javascript are " + numStudents);

for (var i = 0; i < numStudents; i++) {
  alert("Name: " + studentArr[i].name + "\nPhone Number: " + studentArr[i].phoneNumber + "\nCity: " + studentArr[i].city);
};
