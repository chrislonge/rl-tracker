import axios from 'axios';

const API_KEY = 'NBA8BSZLD8TD653TZXYSJQ197I9VHDHB';
const ROOT_URL = 'https://api.rocketleaguestats.com/v1';

export const FETCH_USER = 'FETCH_USER';

export function fetchUser(displayName) {
  const url = `${ROOT_URL}/search/players?apikey=${API_KEY}&display_name=${displayName}`;
  const request = axios.get(url, {
    headers: {'Authorization': API_KEY},
    method: 'get'
  });

  return {
    type: FETCH_USER,
    payload: request
  }
}