/**
 * sleep - Awaitable function that does nothing for the given time frame
 * @param  {number} ms         Milliseconds to sleep for
 * @return {Promise}     Gives a new promise that will resolve in {ms} time
 */
export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const requestHeaders = {
  headers : {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

/**
 * GET - Fetches data from specified URL and can return it as json
 * @param  {string} url        URL to fetch data from
 * @param  {string} returnType Can be 'json' or 'response'
 * @return {response/object}   Response or json object, depending on the {returnType}
 */
export async function GET(url, returnType) {
  let result = await fetch(url, requestHeaders)
  if (returnType === 'json') {
    result = await result.json()
  }
  return result
}
