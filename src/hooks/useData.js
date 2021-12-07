import { useState, useEffect } from 'react'
import { GET } from 'util/dev'


/**
 * useTestData - Hook to get data from an endpoint.
 * @param  {type} endpoint                      URL or an array of URLs to get data from.
 * @param  {type} defaultValue                  Default value for the data before done fetching.
 * @return {[object|[object], boolean, Error]}  The data, a loading state, and an error state.
 */
function useData(endpoint, defaultValue) {
  if (typeof endpoint === 'object') {
    defaultValue = Array(endpoint.length).fill(null)
  } else if (typeof defaultValue === 'undefined') {
    defaultValue = null
  }

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(defaultValue)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        let newData
        if (typeof endpoint === 'object') {
          newData = await Promise.all(
            endpoint.map((url) => GET(url, 'json'))
          )
        } else {
          newData = await GET(endpoint, 'json')
        }

        setData(newData)
      } catch (e) {
        console.error(`Error fetching data from ${endpoint}`, e)
        setError(String(e))
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return [data, loading, error]
}

export default useData
