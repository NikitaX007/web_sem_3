function hello() {
    let name = prompt("Простите за формальность. Как я могу к Вам обращаться?");
    if(name == null || name == ""){
        alert("Хотите анонимности? Ваше право.");
    } else {
        alert(`Привет, ${name}! Очень приятно познакомится!`);
    }
}

window.addEventListener('load', function(event) {
    hello();
});