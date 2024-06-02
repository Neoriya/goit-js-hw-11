console.log('TEST');

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';

const searchForm = document.querySelector('form'); // Зміна на формі
const searchInput = document.querySelector('input');
// const button = document.querySelector('button');
const list = document.querySelector('ul');
const loadingMessage = document.getElementById('loading-message');

searchInput.addEventListener('input', handleInput);
// button.addEventListener('click', handleClick);
searchForm.addEventListener('submit', handleSubmit);

let userRequest;

function handleInput(event) {
  userRequest = event.target.value.trim().toLowerCase();
}

function handleSubmit(event) {
  event.preventDefault(); // Запобігає перезавантаженню сторінки після натискання кнопки
  list.innerHTML = ''; // Очищення списку перед новим пошуком

  if (!userRequest || userRequest.trim() === '') {
    iziToast.error({
      message: 'Sorry, the query field is empty.',
      backgroundColor: '#EF4040',
      messageColor: '#FAFAFB',
      position: 'topRight',
    });
    searchInput.value = ''; // Очищення поля вводу
    userRequest = ''; // Обнулення змінної userRequest
    return;
  }

  loadingMessage.style.display = 'block'; // Показує текстове повідомлення про завантаження

  fetchImages(userRequest)
    .then(images => {
      list.innerHTML = ''; // Очищення списку перед новим пошуком
      list.insertAdjacentHTML('beforeend', createMarkup(images));
    })
    .catch(error => {
      console.error('Error fetching images:', error); // Виправлено: додано пояснювальний текст
    })
    .finally(() => {
      loadingMessage.style.display = 'none'; // Приховує текстове повідомлення про завантаження
      searchInput.value = ''; // Очищення поля вводу
      userRequest = ''; // Обнулення змінної userRequest
    });
}