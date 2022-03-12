function validateform() {
  var name = document.myform.name.value;
  var password = document.myform.password.value;
  var firstpassword = document.myform.password.value;
  var secondpassword = document.myform.password2.value;

  if (name == null || name == "") {
    alert("Name can't be blank");
    return false;
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }
  if (firstpassword == secondpassword) {
    return true;
  } else {
    alert("password must be same!");
    return false;
  }
}

// function Validate() {
//   // let pten = /^([^0-9\W]*)$/;
//   // if (pten.test(document.formBody.userName.value)) {
//   //   console.log("first");
//   // } else {
//   //   console.log("Second");
//   // }
// }
// Validate();
