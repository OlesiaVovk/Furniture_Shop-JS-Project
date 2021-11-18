const btnLike = document.querySelectorAll("input.btn_like");
let arrayLikes = []; //массив лайков

const btnShare = document.querySelectorAll("input.btn_share");
console.log(btnShare);

for (let share of btnShare) {
    share.addEventListener('click', function (event) {
        console.log(event.target.closest(".btn_share").value);
        window.navigator.clipboard.writeText(event.target.closest(".btn_share").value);
        let productName = `${event.target.closest(".btn_share").value}`;
        Swal.fire(//данная функция формирует модальное окно с данными
            "Скопировано, в буфер!",
            "Название товара " + productName
        );
        shareViaWhatsapp(productName);
    });
}

function shareViaWhatsapp(productName) {
    window.open(
        "https://web.whatsapp.com://send?text=" + productName,
        // This is what makes it 
        // open in a new window.
        '_blank'
    );
}

//функция загрузки страницы
document.addEventListener("DOMContentLoaded", function (event) {
    //проверка на наличие информации в localStorage
    if (localStorage.getItem('like') != null) {
        arrayLikes = JSON.parse(localStorage.getItem('like')); //формируем массив arrayLikes из данных(лайков), которые лежат в localStorage
        for (let i = 0; i < arrayLikes.length; i++) {
            for (let j = 0; j < btnLike.length; j++) {
                if (arrayLikes[i] == btnLike[j].value) { //если совпадение нашей коллекции и arrayLikes найдены
                    btnLike[j].classList.toggle("btn_like_red"); //меняем цвет                  
                }
            }
        }
    }
});

//срабатывает при нажатии на кнопку Лайк
for (let like of btnLike) {
    like.addEventListener('click', function (event) {
        event.target.closest(".btn_like").classList.toggle("btn_like_red");
        arrayLikes.push(event.target.value);
        localStorage.setItem('like', JSON.stringify(arrayLikes));
    });
}