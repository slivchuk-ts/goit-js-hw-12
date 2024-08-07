import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.getElementById('gallery');

export function renderImages(images) {
  let markup = '';
  
  markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="card">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}">
        </a>
        <ul class="info-list">
            <li>
                <p class="info-title">Likes</p>
                <p class="info-data">${likes}</p>
            </li>
            <li>
                <p class="info-title">Views</p>
                <p class="info-data">${views}</p>
            </li>
            <li>
                <p class="info-title">Comments</p>
                <p class="info-data">${comments}</p>
            </li>
            <li>
                <p class="info-title">Downloads</p>
                <p class="info-data">${downloads}</p>
            </li>
          </ul>
      </li>`;
      }
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  
  lightbox.refresh();
}

export function showErrorMessage(message) {
  iziToast.error({
    message: message,
    position: 'bottomCenter',
  });
}

export function showWarningMessage(message) {
  iziToast.warning({
    message: message,
    position: 'bottomCenter',
  });
}

export function showInfoMessage(message) {
  iziToast.info({
    message: message,
    position: 'bottomCenter',
  });
}