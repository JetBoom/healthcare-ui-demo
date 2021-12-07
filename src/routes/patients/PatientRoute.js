import { useParams } from 'react-router-dom'
import { PatientPage } from 'pages/patients'
import Loading from 'components/Loading'
import { ErrorPage } from 'pages/error'
import useData from 'hooks/useData'


export default function PatientRoute() {
  const { patientId } = useParams()
  const [patients, loading, error] = useData('/testdata/patients.json', [])

  if (loading) return <Loading />
  if (error) return <ErrorPage code={502}>{error}</ErrorPage>

  const patient = patients[patientId]

  return <PatientPage patient={patient} />
}
