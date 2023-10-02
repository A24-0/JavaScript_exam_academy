$(document).ready(function() {
  $("#registrationForm").submit(function(event) {
    event.preventDefault();

    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var confirmPassword = $("#confirmPassword").val();

    var isValid = true;

    if (username.trim() === "") {
      isValid = false;
      $("#username").addClass("error");
    } else {
      $("#username").removeClass("error");
    }

    if (email.trim() === "") {
      isValid = false;
      $("#email").addClass("error");
    } else {
      $("#email").removeClass("error");
    }

    if (password.trim() === "") {
      isValid = false;
      $("#password").addClass("error");
    } else {
      $("#password").removeClass("error");
    }

    if (confirmPassword.trim() === "" || confirmPassword !== password) {
      isValid = false;
      $("#confirmPassword").addClass("error");
    } else {
      $("#confirmPassword").removeClass("error");
    }

    if (isValid) {
      // Сохранение данных в куки
      setCookie("username", username, 7);
      setCookie("email", email, 7);
      setCookie("password", password, 7);

      $("#username").val("");
      $("#email").val("");
      $("#password").val("");
      $("#confirmPassword").val("");

      window.location.href = "index.html";
    }
  });

  // Функция для установки куки
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  // Функция для получения значения куки по имени
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
});