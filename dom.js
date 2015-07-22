var studentEl = document.getElementById('students');
var mentorEl = document.getElementById('mentors');

function printStudent () {
    var node = document.createElement("LI");
    var textNode = document.createTextNode("Name: " + contactInfo.name + ",  Phone Number: " + contactInfo.phoneNumber + ",  City: " + contactInfo.city);
    node.appendChild(textNode);
    studentEl.appendChild(node);
}

function printMentor () {
  var node = document.createElement("LI");
  var textNode = document.createTextNode("Name: " + contactInfo.name + ",  Phone Number: " + contactInfo.phoneNumber + ",  City: " + contactInfo.city);
  node.appendChild(textNode);
  mentorEl.appendChild(node);

}

var submitButton = document.getElementById('subBtn');
var studentCheckbox = document.getElementById('studentCheckbox');
var mentorCheckbox =  document.getElementById('mentorCheckbox');
var form = document.getElementById('contact');

submitButton.addEventListener("click", function() {
  if (studentCheckbox.checked === true) {
    students();
  } else if(mentorCheckbox.checked === true){
    mentors();
  }
  form.reset();
});



