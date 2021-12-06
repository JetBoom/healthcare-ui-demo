import { useState, useEffect } from 'react'
import { PatientPage } from 'pages/patients'
import { useParams } from 'react-router-dom'
import Loading from 'components/Loading'
import { GET } from 'util/dev'


export default function PatientRoute() {
  const { patientId } = useParams()
  const [loading, setLoading] = useState(true)
  const [patient, setPatient] = useState({})

  useEffect(() => {
    // useEffect can't use an async function so we call it this way.
    const fetchData = async () => {
      setLoading(true)

      try {
        const patientsData = await GET('/testdata/patients.json', 'json')

        const patientData = patientsData[patientId]
        if (!patientData) {
          throw new Error('Patient not found')
        }

        setPatient(patientData)

        setLoading(false)
      } catch (e) {
        console.error(`Error fetching data: ${e}`)
      }
    }

    fetchData()
  }, [patientId])

  if (loading) return <Loading />

  return <PatientPage patient={patient} />
}
