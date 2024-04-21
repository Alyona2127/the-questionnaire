const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();

  // Здесь твой код
  
    fetch(`https://polinashneider.space/user`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer: Alyona2127'
      },
      body: JSON.stringify({
        "name": document.querySelector("#name").value,
        "secondName": document.querySelector("#secondName").value,
        "phone": document.querySelector("#phone").value,
        "email": document.querySelector("#email").value,
        "agree": document.querySelector("#agree").checked
      }),
    })
    .then((result) => {
      return result.json();
    })
    .then ((data) => {
      alert("Запись успешно внесена");
    })
    .catch((error) => {
      alert("Что-то пошло не так");
      console.log(error);
    })
    
    form.reset();
});