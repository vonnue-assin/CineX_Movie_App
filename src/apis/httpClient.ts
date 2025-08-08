import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGJjZDM5YmMzZWVjYWRkNmI2YmYwZjlhNjVkOGFjYSIsIm5iZiI6MTc1NDMwMTM4OC4zMTQsInN1YiI6IjY4OTA4M2NjOGM4ZDJhMTJkNWRlNmViYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OuyXVE42TiqMJMD77oXoC1dtw-k7LxgcyZ7JLwhYmOs';

const httpClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export default httpClient;
