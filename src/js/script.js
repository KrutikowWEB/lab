
/* Гамбургер и адаптивное меню */

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu__list'),
  menuItem = document.querySelectorAll('.menu__item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu__list_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu__list_active');
      })
  })
})

/* Попап */

let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('active'); // Добавляем класс 'active' для фона
      popup.classList.add('active'); // И для самого окна
  })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  popupBg.classList.remove('active'); // Убираем активный класс с фона
  popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popupBg) { // Если цель клика - фот, то:
      popupBg.classList.remove('active'); // Убираем активный класс с фона
      popup.classList.remove('active'); // И с окна
  }
});

/* accordion */

const boxes = Array.from(document.querySelectorAll(".accordion__box")); // считываем все элементы аккордеона в массив

boxes.forEach((box) => {
  box.addEventListener("click", boxHandler); // при нажатии на бокс вызываем ф-ию boxHanlder
});

function boxHandler(e) {
  e.preventDefault(); // сбрасываем стандартное поведение
  let currentBox = e.target.closest(".accordion__box"); // определяем текущий бокс
  let currentContent = e.target.nextElementSibling; // находим скрытый контент
  currentBox.classList.toggle("active"); // присваиваем ему активный класс
  if (currentBox.classList.contains("active")) {
    // если класс активный ..
    currentContent.style.maxHeight = currentContent.scrollHeight + "px"; // открываем контент
  } else {
    // в противном случае
    currentContent.style.maxHeight = 0; // скрываем контент
  }
}

//SLick-slider где при нажатии на конкретную кнопку выходит конкретный слайд!!!! Крутая вещь!!


  /* $('.volume__slick').on('init', function(event, slick){
    var dots = $( '.slick-dots li' );
    console.log( 'Оптовый 40 000 л.' );
    dots.each( function( k, v){
      $(this).find( 'button' ).addClass( 'heading'+ k );
    });
    var items = slick.$slides;
    items.each( function( k, v){
        var text = $(this).find( 'h3' ).text();
        $( '.heading' + k ).text(text);
    });
  });
  $('.volume__slick').slick({
    dots: true,
    focusOnSelect: true,
    infinite: true,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  }); */



//аккордеон

/* var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
 */






/* popap */

/* $('[data-modal=order]').on('click', function() {
    $('.overlay, #order').fadeIn(400);
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #order').fadeOut(400);
  }); */
  




  /* validate */
  
  /* function validateForms(form){
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа!")
              },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            }
        }
    });
  };
  
  validateForms('#order form');
  validateForms('#question form'); */


  /* validateForms('#consultation form'); //Если форм больше, то меняем ID и все
  validateForms('#order form'); */
  
  



  /* Для отправки данных без перезагрузки страницы технология AJAcs */
  
  /* $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#question, #order').fadeOut();  // прописывается id блоков , которые закрываются
        $('#backup').fadeIn('slow');   // проиписывается id блоков , кот. открываются
  
        $('form').trigger('reset');
    });
    return false;
  }); */
  
  
  



  // мой скрипт для возврата на блок с определенным id и определенным классом
  // здесь data-modal=back - дата-атрибут кнопки(присвоили в HTML), при нажатии которой будет возврат на страницу
  // .overlay, #backup - класс блока и id блока с которого мы уходим
  /* 
  $('[data-modal=back]').on('click', function() {
    $('.overlay, #backup').fadeOut(400);
  }); */