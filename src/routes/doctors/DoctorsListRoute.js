import { DoctorsListPage } from 'pages/doctors'
import Loading from 'components/Loading'
import { ErrorPage } from 'pages/error'
import useData from 'hooks/useData'


export default function DoctorsListRoute() {
  const [doctors, loading, error] = useData('/testdata/doctors.json', [])

  if (loading) return <Loading />
  if (error) return <ErrorPage code={502}>{error}</ErrorPage>

  return <DoctorsListPage doctors={doctors} />
}
