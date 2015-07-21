var studentEl = document.getElementById('students');
var mentorEl = document.getElementById('mentors');

for (var i = 0; i < studentArr.length; i++) {
  var node = document.createElement("LI");
  var textNode = document.createTextNode("Name: " + studentArr[i].name + ",  Phone Number: " + studentArr[i].phoneNumber + ",  City: " + studentArr[i].city);
  node.appendChild(textNode);
  studentEl.appendChild(node);
};

for (var i = 0; i < mentorArr.length; i++) {
  var node = document.createElement("LI");
  var textNode = document.createTextNode("Name: " + mentorArr[i].name + ",  Phone Number: " + mentorArr[i].phoneNumber + ",  City: " + mentorArr[i].city);
  node.appendChild(textNode);
  mentorEl.appendChild(node);
}
