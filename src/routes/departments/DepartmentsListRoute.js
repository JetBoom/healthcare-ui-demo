import { useMemo } from 'react'
import { DepartmentsListPage } from 'pages/departments'
import Loading from 'components/Loading'
import { ErrorPage } from 'pages/error'
import useData from 'hooks/useData'


function aggregateDepartmentData(patientsData, doctorsData) {
  const newDepartments = []
  const depMap = {}

  const getOrCreateDepartment = (name) => {
    if (!depMap[name]) {
      depMap[name] = {
        name,
        doctorCount: 0,
        patientCount: 0,
        totalTreatmentCosts: 0,
      }
    }

    return depMap[name]
  }

  for (let person of patientsData) {
    const dep = getOrCreateDepartment(person.department)
    dep.patientCount++
    dep.totalTreatmentCosts += person.treatmentCosts
  }

  for (let doctor of doctorsData) {
    const dep = getOrCreateDepartment(doctor.department)
    dep.doctorCount++
  }

  for (let depName in depMap) {
    newDepartments.push(depMap[depName])
  }

  return newDepartments
}

export default function DepartmentsListRoute() {
  const [data, loading, error] = useData([
    '/testdata/patients.json',
    '/testdata/doctors.json',
  ])
  const [patientsData, doctorsData] = data

  const departments = useMemo(() => (patientsData && doctorsData) ? aggregateDepartmentData(patientsData, doctorsData) : null,
    [loading]) // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <Loading />
  if (error) return <ErrorPage code={502}>{error}</ErrorPage>

  return <DepartmentsListPage departments={departments} />
}
