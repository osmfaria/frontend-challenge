import axios from 'axios'

export const simuleApi = axios.create({
  baseURL: 'https://frontend-challenge-7bu3nxh76a-uc.a.run.app',
  // baseURL: 'https://frontend-challenge-7bu3nxh76a-uc.a.run.app?delay=3000'
  // baseURL: 'https://frontend-challenge-7bu3nxh76a-uc.a.run.app?timeout&delay=2000'
  // baseUrl: 'https://frontend-challenge-7bu3nxh76a-uc.a.run.app?internalError&delay=8000'
})