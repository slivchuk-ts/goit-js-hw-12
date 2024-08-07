import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  showErrorMessage,
  showWarningMessage,
  showInfoMessage,
} from './js/render-functions.js';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const loadMoreBtn = document.querySelector('.load-more');
const pendingIcon = document.getElementById('pending-icon');

let currentPage = 1;
let currentQuery = '';

searchForm.addEventListener('submit', async event => {
  event.preventDefault();

  const query = searchInput.value.trim();

  if (query === '') {
    showWarningMessage('Please enter a search query');
    return;
  }

  currentQuery = query;
  currentPage = 1;

  try {
    pendingIcon.style.display = 'block';

    const data = await fetchImages(currentQuery, currentPage);

    if (data.hits.length === 0) {
      showErrorMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      gallery.innerHTML = '';
      renderImages(data.hits);
      if (data.totalHits > currentPage * 15) {
        loadMoreBtn.style.display = 'block';
      } else {
        loadMoreBtn.style.display = 'none';
      }
    }
  } catch (error) {
    showErrorMessage('Failed to fetch images. Please try again later.');
  } finally {
    pendingIcon.style.display = 'none';
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage++;

  pendingIcon.style.display = 'block';

  try {
    const data = await fetchImages(currentQuery, currentPage);
    pendingIcon.style.display = 'none';
    if (data.hits.length > 0) {
      renderImages(data.hits);
      if (data.totalHits > currentPage * 15) {
        loadMoreBtn.style.display = 'block';
      } else {
        loadMoreBtn.style.display = 'none';
        showInfoMessage(
          "We're sorry, but you've reached the end of search results."
        );
      }

      const cardHeight = document
        .querySelector('.card')
        .getBoundingClientRect().height;

      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    showErrorMessage('Failed to load more images. Please try again later.');
  }
  finally {
    pendingIcon.style.display = 'none';
  }
});