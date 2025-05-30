import CONFIG from '../config';

const ENDPOINTS = {
  ENDPOINT: `${CONFIG.BASE_URL}/https://story-api.dicoding.dev/v1`,
};

export async function getStories() {
  const response = await fetch('https://story-api.dicoding.dev/v1/stories?location=1');
  if (!response.ok) throw new Error('Gagal mengambil data story');
  const data = await response.json();
  return data.listStory;
}

export async function getData() {
  const fetchResponse = await fetch(ENDPOINTS.ENDPOINT);
  return await fetchResponse.json();
}