/*Отображение модального окна при клике на кнопку*/
/*находим кнопку по id*/ /*.addEventListener действие для кнопки*/
document
  .getElementById("open-modal-btn")
  .addEventListener("click", function () {
    /*находим модальное окно по id*/ /* добавляем класс open чтобы отобразить модальное окно */ 
    document
      .getElementById("modal")
      .classList.add("open");
  });

document
  .getElementById("open-modal-btn-2")
  .addEventListener("click", function () {
    /*находим модальное окно по id*/ /* добавляем класс open чтобы отобразить модальное окно */ 
    document
      .getElementById("modal")
      .classList.add("open");
  });

/*Скрытие модального окна. При клике на кнопку Х удаляется класс open*/
document
  .getElementById("close-modal-btn")
  .addEventListener("click", function () {
    /*находим модальное окно по id*/ /* добавляем класс open чтобы отобразить модальное окно */ 
    document
      .getElementById("modal")
      .classList.remove("open");
  });

/*Закрытие модального окна при нажатии на Esc*/
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("modal").classList.remove("open");
  }
});

/*Закрытие модального окна при при клике вне окна*/
document
  .querySelector("#modal .modal__box")
  .addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });

document.getElementById("modal").addEventListener("click", (event) => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});
