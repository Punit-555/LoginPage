 

  function validate(){

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

   if(username == "admin" && password=="user"){
     alert(" You Have been logged in Succesfull.");
     return false;
}

   else{
   alert("Error Occured.")
}
  }

