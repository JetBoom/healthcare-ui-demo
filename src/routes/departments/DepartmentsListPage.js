import { useState, useEffect, useMemo } from 'react'
import Page from 'components/Page'
import DataTable from 'components/DataTable'
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

export default function DepartmentsListPage() {
  const [loading, setLoading] = useState(true)
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    // useEffect can't use an async function so we call it this way.
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

  const columns = useMemo(() => ([
    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
      grow: 2,
    },
    {
      name: 'Num. Patients',
      selector: (row) => row.patientCount,
      sortable: true,
    },
    {
      name: 'Num. Doctors',
      selector: (row) => row.doctorCount,
      sortable: true,
      right: true,
    },
    {
      name: 'Total Treatment Costs',
      selector: (row) => row.totalTreatmentCosts,
      format: (row) => row.totalTreatmentCosts.toLocaleString('en-US', {style: 'currency', currency: 'USD'}),
      sortable: true,
      right: true,
    },
  ]), []) // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <Loading />

  return (
    <Page>
      <div style={{width: '100%'}}>
        <DataTable
          title="Departments"
          data={departments}
          columns={columns}
        />
      </div>
    </Page>
  )
}
