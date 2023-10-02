$(window).on('unload', function() {
    //localStorage
    localStorage.setItem('forgetMe', 'false');
  });

$(document).ready(function() {
    //задание 1
    //клик на пункт меню
    $(".menu-item").click(function(e) {
        //удаляем активный класс у всех
        $(".menu-item").removeClass("active");

        //активный класс
        $(this).addClass("active");    
      
        //задание 2
        //плавная анимация
		e.preventDefault();
				var target = $(this).attr('href');
				$('html, body').animate({
					scrollTop: $(target).offset().top
				}, 1000);
    });

    //задание 4
    $('#sub_btn').click(function(event) {
        event.preventDefault();
        if (localStorage.getItem('forgetMe') !== 'true'){
            showModal();
        }
    
    $('#Subscribe').click(function(e) {
        e.preventDefault();

        clearErrors();

        var email = document.getElementById("Email").value;

        if (email === "") {
          displayError("email-error", "Пожалуйста, введите ваш email.");
          return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailRegex)) {
          displayError("email-error", "Пожалуйста, введите правильный формат email.");
          return false;
        }

    // Проверяем, нужно ли отключить показ модального окна
    if ($('#forgetMe').is(':checked')) {
      localStorage.setItem('forgetMe', 'true');
      var btn = $('#sub_btn');
      $(btn).prop('disabled', true);
      $(btn).text('You said you don\'t want to see me again! :(');
    }
        closeModal();
    });

    $('.close').click(function() {
        closeModal();
    });

    function showModal() {
        $('#newsletter').show();
    }

    function closeModal() {
        $('#newsletter').hide();
    }
    });

    //5
  $("#openModal").click(function() {
    $("#modal").css("display", "block");
  });

  $(".close").click(function() {
    $("#modal").css("display", "none");
  });

  // Обработка нажатия кнопки "Войти"
  $("#loginButton").click(function() {
    var login = $("#login").val();
    var password = $("#password").val();

    var storedLogin = getCookie("email");
    var storedPassword = getCookie("password");

    if (login === storedLogin && password === storedPassword) {
      $("#loginMessage").text("Успешная авторизация!");
    } else {
      $("#loginMessage").text("Неверный логин или пароль");
    }
  });

  // Функция для получения значения куки по имени
  function getCookie(name) {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf(name + "=") === 0) {
        return cookie.substring(name.length + 1);
      }
    }

    return "";
  }
});    

//задание 3
function validateForm() {
    var name = document.getElementById("user-name").value;
    var email = document.getElementById("user-email").value;
    var message = document.getElementById("user-message").value;
    var subject = document.getElementById("user-subject").value;
    var phone = document.getElementById("user-phone").value;    
    
    clearErrors();

    if (name === "") {
        displayError("name-error", "Пожалуйста, введите ваше имя.");
        return false;
      }
    
      if (email === "") {
        displayError("email-error", "Пожалуйста, введите ваш email.");
        return false;
      }
    
      if (phone === "") {
        displayError("phone-error", "Пожалуйста, введите ваш телефон.");
        return false;
      }
    
      if (message === "") {
        displayError("message-error", "Пожалуйста, введите ваше сообщение.");
        return false;
      }
    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.match(emailRegex)) {
        displayError("email-error", "Пожалуйста, введите правильный формат email.");
        return false;
      }
    
      const phoneRegex = /^\d{10}$/;
      if (!phone.match(phoneRegex)) {
        displayError("phone-error", "Пожалуйста, введите правильный формат телефона (10 цифр без разделителей).");
        return false;
      }

      showSuccessMessage();

      document.getElementById("contact-form").reset();
    
      return true;
  }

function displayError(id, message) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function clearErrors() {
  const errorElements = document.getElementsByClassName("error");
  for (let i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = "";
    errorElements[i].style.display = "none";
  }
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
  });

function showSuccessMessage() {
  document.getElementById("success-message").style.display = "block";
}

function closeSuccessMessage() {
  document.getElementById("success-message").style.display = "none";
}
