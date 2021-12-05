export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const requestHeaders = {
  headers : {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

export const GET = (url) => fetch(url, requestHeaders)
