// Отримуємо елемент зображення за його ID
const image = document.getElementById("myImage-1");

// Масив з посиланнями на зображення
const imageSources = [
  "./images/second-galery/big-1@1x.jpg",
  "./images/second-galery/bg-2@1x.jpg"
];

let currentImageIndex = 0; // Поточний індекс зображення

// Функція, яка змінює картинку
function changeImage() {
  // Змінюємо атрибут src зображення на новий шлях
  image.src = imageSources[currentImageIndex];

  // Збільшуємо індекс для вибору наступного зображення
  currentImageIndex++;

  // Якщо досягли кінця масиву, починаємо знову
  if (currentImageIndex >= imageSources.length) {
    currentImageIndex = 0;
  }
}
// Викликаємо функцію changeImage кожні 200 мілісекунд (0.2 секунди)
setInterval(changeImage, 1500);


// let originalImageSrc = ''; // Зберігаємо початковий шлях зображення

// // Функція для зміни зображення при наведенні
// function changeImage(img) {
//     originalImageSrc = img.src; // Зберігаємо початковий шлях зображення
//     img.src = img.src.replace('@1x.jpg', '@2x.jpg'); // Змінюємо шлях зображення на @2x.jpg
// }

// // Функція для відновлення зображення при виході миші
// function restoreImage(img) {
//     img.src = originalImageSrc; // Повертаємо початковий шлях зображення
// }