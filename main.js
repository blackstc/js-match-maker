var contactInfo = {name: "", phoneNumber: "", city: ""};

function students() {

  var studentName = document.getElementById('name').value;
  var studentPhone = document.getElementById('phoneNumber').value;
  var studentCity = document.getElementById('city').value;

  contactInfo.name = studentName;
  contactInfo.phoneNumber = studentPhone;
  contactInfo.city = studentCity;

  printStudent();
}



function mentors() {
  var mentorName = document.getElementById('name').value;
  var mentorPhone = document.getElementById('phoneNumber').value;
  var mentorCity = document.getElementById('city').value;

  contactInfo.name = mentorName;
  contactInfo.phoneNumber = mentorPhone;
  contactInfo.city = mentorCity;

    printMentor();
}

//Code below was used in previous iteration of the problem for using prompts and alerts.
// alert("The total number of students learning javascript are " + studentArr.length);

// for (var i = 0; i < studentArr.length; i++) {
//   alert("Name: " + studentArr[i].name + "\nPhone Number: " + studentArr[i].phoneNumber + "\nCity: " + studentArr[i].city);
// };

// alert("The total number of mentors with javascript are " + mentorArr.length);

// var mentorCity = prompt("Please name a city.");
// var cityArr = [];

// for (var i = 0; i < mentorArr.length; i++) {
//   if (mentorCity.toUpperCase() === mentorArr[i].city.toUpperCase()) {
//     cityArr.push(mentorArr[i]);
//   }
//   console.log(cityArr);
// }

// for (var i = 0; i < cityArr.length; i++) {
//   alert(cityArr[i].name + " is from " + mentorCity);
// }
