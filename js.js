// Чому для роботи з input не рекомендується використовувати клавіатуру?
//Событие input срабатывает каждый раз при изменении значения
//В отличие от событий клавиатуры, оно работает при любых изменениях значений, даже если они не связаны с клавиатурными действиями: вставка с помощью мыши или распознавание речи при диктовке текста.

// Завдання
// Реалізувати функцію підсвічування клавіш. Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.

// Технічні вимоги:
// У файлі index.html лежить розмітка для кнопок.
// Кожна кнопка містить назву клавіші на клавіатурі
// Після натискання вказаних клавіш - та кнопка, на якій написана ця літера, повинна фарбуватися в синій колір. 
// При цьому якщо якась інша літера вже раніше була пофарбована в синій колір - вона стає чорною. 
// Наприклад за натисканням Enter перша кнопка забарвлюється у синій колір. Далі, користувач натискає S, 
// і кнопка S забарвлюється в синій колір, а кнопка Enter знову стає чорною.

const buttons = document.querySelectorAll(".btn")
    console.log(buttons);
    document.body.addEventListener("keypress", pressBtn)

function pressBtn(e){
    console.log(buttons);
    buttons.forEach(item => {
        if(item.classList.contains("btn-active")){
            item.classList.remove("btn-active");
        } 
        if(item.innerText.toLocaleLowerCase() === e.key.toLocaleLowerCase()){
            item.classList.add("btn-active");
        }
    });
}