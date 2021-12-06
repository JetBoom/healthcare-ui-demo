import { useState, useEffect } from 'react'
import DepartmentsListPage from 'pages/DepartmentsListPage'
import Loading from 'components/Loading'
import { GET } from 'util/dev'


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
  const [loading, setLoading] = useState(true)
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const [patientsData, doctorsData] = await Promise.all([
          GET('/testdata/patients.json', 'json'),
          GET('/testdata/doctors.json', 'json'),
        ])

        setDepartments(aggregateDepartmentData(patientsData, doctorsData))

        setLoading(false)
      } catch (e) {
        console.error('Error fetching data', e)
      }
    }

    fetchData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <Loading />

  return <DepartmentsListPage departments={departments} />
}
