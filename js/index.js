var yName = document.getElementById("yName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var signupBotton = document.getElementById("signupBotton");
var Alert = document.getElementById("Alert");
var spAlert = document.getElementById("spAlert");
var spAlert2 = document.getElementById("spAlert2");
var loginBotton = document.getElementById("LoginBotton");
var spAlert3 = document.getElementById("spAlert3");
var logout = document.getElementById("logout");
var myId = document.getElementById("myId");
var array = [];
if (localStorage.getItem("key") == null) {
  array = [
    (newRigester = {
      rName: "hello",
      rEmail: "hello",
      rPassword: "hello",
    }),
  ];
  localStorage.setItem("key", JSON.stringify(array));
} else {
  array = JSON.parse(localStorage.getItem("key"));
}

// add a new regester
function signUp(par) {
  var bol;
  var check = JSON.parse(localStorage.getItem("key"));
  var y = email.value.toLocaleLowerCase();
  for (var i = 0; i < check.length; i++) {
    var x = check[i].rEmail.toLocaleLowerCase();
    if (y == x || password.value == check[i].rPassword) {
      bol = false;
      break;
    } else if (y == x && password.value == check[i].rPassword) {
      bol = false;
      break;
    } else {
      bol = true;
    }
  }
  if (par == "signupBotton") {
    if (
      yName.classList.contains("is-valid") &&
      email.classList.contains("is-valid") &&
      password.classList.contains("is-valid")
    ) {
      console.log(par);
      if (bol) {
        var newRigester = {
          rName: yName.value,
          rEmail: email.value,
          rPassword: password.value,
        };
        array.push(newRigester);
        localStorage.setItem("key", JSON.stringify(array));
        clear();
        spAlert.classList.remove("d-none");
      } else {
        Alert.classList.remove("d-none");
        clear();
      }
    } else {
      spAlert2.classList.remove("d-none");
    }
  } else if (par == "LoginBotton") {
    if (
      email.classList.contains("is-valid") &&
      password.classList.contains("is-valid")
    ) {
      var bole;
      var y = email.value.toLocaleLowerCase();
      for (var i = 0; i < check.length; i++) {
        var x = check[i].rEmail.toLocaleLowerCase();
        if (y == x && password.value == check[i].rPassword) {
          bole = true;
          var myName = check[i].rName;
          localStorage.setItem("key1", myName);
          break;
        } else {
          bole = false;
        }
      }
      if (bole) {
        window.location =
          "file:///C:/Users/moham/OneDrive/%D8%B3%D8%B7%D8%AD%20%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8/task-11-js4/home.html";
      } else {
        spAlert3.classList.remove("d-none");
      }
    } else {
      spAlert2.classList.remove("d-none");
    }
  }
}
var myNamex = localStorage.getItem("key1");
if (myId == null) {
} else {
  myId.innerHTML = "Welcome " + myNamex;
}

if (signupBotton == null) {
} else {
  signupBotton.addEventListener("click", function (e) {
    signUp(e.target.id);
  });
}
if (loginBotton == null) {
} else {
  loginBotton.addEventListener("click", function (e) {
    signUp(e.target.id);
  });
}
// end of add a new regester

// validate of the new regester
function validate(parameter) {
  var regex = {
    yName:
      /^[A-Z]?[a-zA-Z]{1,7}[ ]?([A-Z]?[a-zA-Z]{1,7})?[ ]?([A-Z]?[a-zA-Z]{1,7})?[ ]?([A-Z]?[a-zA-Z]{1,7})?$/,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d@$!#%*?&]{8,}$/, //Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:
  };
  if (regex[parameter.id].test(parameter.value)) {
    parameter.classList.add("is-valid");
    parameter.classList.remove("is-invalid");
    parameter.nextElementSibling.classList.replace("d-block", "d-none");
  } else {
    parameter.classList.add("is-invalid");
    parameter.classList.remove("is-valid");
    parameter.nextElementSibling.classList.replace("d-none", "d-block");
  }
}
if (yName == null) {
} else {
  yName.addEventListener("input", function () {
    validate(this);
    Alert.classList.add("d-none");
    spAlert2.classList.add("d-none");
    spAlert.classList.add("d-none");
  });
}

if (email == null) {
} else {
  email.addEventListener("input", function () {
    validate(this);
    Alert.classList.add("d-none");
    spAlert2.classList.add("d-none");
    spAlert.classList.add("d-none");
  });
}
if (password == null) {
} else {
  password.addEventListener("input", function () {
    validate(this);
    Alert.classList.add("d-none");
    spAlert2.classList.add("d-none");
    spAlert.classList.add("d-none");
  });
}
// end of validate of the new regester
function clear() {
  yName.value = null;
  email.value = null;
  password.value = null;
  yName.classList.remove("is-valid");
  email.classList.remove("is-valid");
  password.classList.remove("is-valid");
}
