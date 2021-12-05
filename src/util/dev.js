export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const requestHeaders = {
  headers : {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

export const GET = async (url, returnType) => {
  let result = await fetch(url, requestHeaders)
  if (returnType === 'json') {
    result = await result.json()
  }
  return result
}
