import { useMemo } from 'react'
import { OverviewPage } from 'pages/overview'
import Loading from 'components/Loading'
import { ErrorPage } from 'pages/error'
import useData from 'hooks/useData'


export default function OverviewRoute() {
  const [data, loading, error] = useData([
    '/testdata/patients.json',
    '/testdata/doctors.json',
    '/testdata/cars.json',
  ])
  const [patientsData, doctorsData, carData] = data

  const aggregateData = useMemo(() => {
    if (loading || error) return {}

    const demographics = { Male: 0, Female: 0 }
    const departments = {}
    const statuses = {}
    let totalTreatmentCosts = 0
    for (let person of patientsData) {
      person.sex === 'Male' ? demographics.Male++ : demographics.Female++
      departments[person.department] = (departments[person.department] || 0) + 1
      statuses[person.status] = (statuses[person.status] || 0) + 1
      totalTreatmentCosts += person.treatmentCosts
    }

    return {
      demographics,
      departments,
      statuses,
      totalTreatmentCosts,
      avgTreatmentCost: totalTreatmentCosts / patientsData.length,
    }
  }, [loading, error]) // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <Loading />
  if (error) return <ErrorPage code={502}>{error}</ErrorPage>

  return (
    <OverviewPage
      demographics={aggregateData.demographics}
      departments={aggregateData.departments}
      statuses={aggregateData.statuses}
      avgTreatmentCost={aggregateData.avgTreatmentCost}
      totalPatients={patientsData.length}
      totalDoctors={doctorsData.length}
      availableCars={carData.carCount}
    />
  )
}
