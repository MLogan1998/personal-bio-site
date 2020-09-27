import axios from 'axios';
import apiKeys from '../apiKeys.json';

const accessToken = apiKeys.github.apiKey;
const gitHubUrl = apiKeys.github.url;

const options = {
  headers: {
    Accept: 'application/json',
    // ContentType: 'application/json',
    Authorization: `token ${accessToken}`,
  },
};

const getGhData = () => new Promise((resolve, reject) => {
  axios.get(`${gitHubUrl}`, options)
    .then((response) => {
      const { data } = response;
      resolve(data);
    })
    .catch((err) => reject((err)));
});

export default { getGhData };
