import Page from 'components/Page'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from 'components/Loading'


export default function PatientPage() {
  const { patientId } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRecords = async () => {
      setLoading(true)

      try {
        /*const response = await axios.get(`${API_URL}/metrics/${patientId}/recordset`)
        const { status, data } = response

        if (status === 200) {
          dispatch(setRecords({ patientId, data: data.values }))
        } else if (status === 404) {
          throw new Error('Metric not found')
        } else {
          throw new Error('Unknown response')
        }*/
      } catch (e) {
        console.error(`Error fetching recordset for metric ${patientId}: ${e}`)
      } finally {
        setLoading(false)
      }
    }

    fetchRecords()
  }, [patientId]) // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <Loading />

  return (
    <Page>
      Patient {patientId}
    </Page>
  )
}
