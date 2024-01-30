function validate() {
  var up = /^[A-Z/a-z ]+$/;
  var pp = /^[6-9]{1}[0-9]{9}$/;
  var psp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

  var uv = document.getElementById("uname").value;
  var ue = document.getElementById("uemail").value;
  var ph = document.getElementById("uphone").value;
  var ps = document.getElementById("upass").value;
  var pc = document.getElementById("ucpass").value;

  // for username

  if (uv == "") {
    document.getElementById("msg1").innerHTML = "*Enter the username";
    return false;
  }

  if (uv.match(up)) true;
  else {
    document.getElementById("msg1").innerHTML =
      "*Username should contain alphabets only (A-Z/a-Z)";
    return false;
  }

  if (uv.length < 3) {
    document.getElementById("msg1").innerHTML =
      "*Username should contain minimum 3 charecters";
    return false;
  }

  if (uv.length > 16) {
    document.getElementById("msg1").innerHTML =
      "*Username should contain maximum 15 charecters";
    return false;
  }

  //For email

  if (ue == "") {
    document.getElementById("msg2").innerHTML = "*Enter the Email";
    return false;
  }

  //for phone

  if (ph == "") {
    document.getElementById("msg3").innerHTML = "*Enter the Phone Number";
    return false;
  }

  if (ph.match(pp)) true;
  else {
    document.getElementById("msg3").innerHTML = "*Invalid Phone Number";
    return false;
  }

  //for password
  if (ps == "") {
    document.getElementById("msg4").innerHTML = "*Enter the Password";
    return false;
  }
  if (ps.length < 9) {
    document.getElementById("msg4").innerHTML =
      "*Password should contain minimum 8 charecters";
    return false;
  }

  if (ps.match(psp)) true;
  else {
    document.getElementById("msg4").innerHTML = "*Invalid Password";
    return false;
  }

  //for confirmpassword

  if (pc == "") {
    document.getElementById("msg5").innerHTML = "*Enter the Password";
    return false;
  }

  if (pc == ps) true;
  else {
    document.getElementById("msg5").innerHTML = "*Password do not match";
    return false;
  }
  return true;
}
