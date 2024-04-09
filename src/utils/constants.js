export const AVATAR = 'https://avatars.githubusercontent.com/u/109078342?v=4';
const secretKey = import.meta.env.VITE_TMDB_KEY;

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: secretKey,
  },
};

export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w500';

export const supported_lang = [
  { value: 'en', lang: 'English' },
  { value: 'hindi', lang: 'Hindi' },
  { value: 'arabic', lang: 'Arabic' },
];
