import axios from 'axios';
import config from '../config';
import { urlParamsFromObject } from './query-params';

export const getFullUrl = relativeUrl => config.apiUrl + relativeUrl;

export const http = {
  get(url, queryParams) {
    return axios.get(urlParamsFromObject(getFullUrl(url), queryParams)).then(i => i.data);
  }
};
