import { useState, useEffect } from 'react'
import { PatientsListPage } from 'pages/patients'
import Loading from 'components/Loading'
import { GET } from 'util/dev'


export default function PatientsListRoute() {
  const [loading, setLoading] = useState(false)
  const [patients, setPatients] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const patientsData = await GET('/testdata/patients.json', 'json')

        setPatients(patientsData)

        setLoading(false)
      } catch (e) {
        console.error(`Error fetching data: ${e}`)
      }
    }

    fetchData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <Loading />

  return <PatientsListPage patients={patients} />
}
