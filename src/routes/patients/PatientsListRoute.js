import { PatientsListPage } from 'pages/patients'
import Loading from 'components/Loading'
import { ErrorPage } from 'pages/error'
import useData from 'hooks/useData'


export default function PatientsListRoute() {
  const [patients, loading, error] = useData('/testdata/patients.json', [])

  if (loading) return <Loading />
  if (error) return <ErrorPage code={502}>{error}</ErrorPage>

  return <PatientsListPage patients={patients} />
}
