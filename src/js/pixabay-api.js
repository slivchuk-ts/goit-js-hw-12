import axios from 'axios';

export async function fetchImages(query, page) {
  const searchParams = new URLSearchParams({
    key: '45176970-913b8fa7a45cf3c015efbbbdd',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  });

  const url = `https://pixabay.com/api/?${searchParams}`;

  try {
    const response = await axios(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
}