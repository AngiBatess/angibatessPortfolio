function validation(){
  var name = document.getElementById('name').value;
  var subject = document.getElementById('subject').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var name = document.getElementById('error-message');
  var text;

  error-message.style.padding = "10px";

  if(name.length <5){
    text = "Please Enter Valid Name";
    error-message.innerHTML = text;
    return false;
  }

  if(subject.length <10){
    text = "Please Enter Correct Subject";
    error-message.innerHTML = text;
    return false;
  }

  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter Valid Phone Number";
    error-message.innerHTML = text;
    return false;
  }

  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter Valid Email";
    error-message.innerHTML = text;
    return false;
  }

  if(message.length <= 100){
    text = "Please Enter More Than 100 Characters";
    error-message.innerHTML = text;
    return false;
  }
alert("Form Submitted Successfully!")
return true;

}
