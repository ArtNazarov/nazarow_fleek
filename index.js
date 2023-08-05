use_host = 'nazarow.ru';

if (window.location.hostname != "nazarow.ru") {
  use_host = 'fleek.ipfs.io/ipfs/QmYeNpu3m3LAkJdSXJMWta8zt4nmBzq4AQYU6rP46qx88x';
}

const host = use_host; // заменить на нужный хост
const navLinks = document.querySelectorAll(".nav-menu"); // выбираем все элементы с классом nav-menu
navLinks.forEach(link => {
  const oldHref = link.getAttribute("href"); // получаем старое значение href
  link.setAttribute("href", 'https://' + host + oldHref); // устанавливаем новое значение href
});


