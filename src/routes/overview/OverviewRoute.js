import { useState, useEffect } from 'react'
import { OverviewPage } from 'pages/overview'
import Loading from 'components/Loading'
import { GET } from 'util/dev'


export default function OverviewRoute() {
  const [loading, setLoading] = useState(true)
  const [demographics, setDemographics] = useState({ Male: 0, Female: 0 })
  const [departments, setDepartments] = useState({})
  const [avgTreatmentCost, setAvgTreatmentCost] = useState(0)
  const [totalPatients, setTotalPatients] = useState(0)
  const [totalDoctors, setTotalDoctors] = useState(0)
  const [availableCars, setAvailableCars] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const [patientsData, doctorsData, carData] = await Promise.all([
          GET('/testdata/patients.json', 'json'),
          GET('/testdata/doctors.json', 'json'),
          GET('/testdata/cars.json', 'json'),
        ])

        // Aggregate data from all our test json in to a data object.
        // Totally messy, wouldn't be done like this with real data.
        const newDemographics = { Male: 0, Female: 0 }
        const newDepartments = {}
        let totalTreatmentCosts = 0
        for (let person of patientsData) {
          person.sex === 'Male' ? newDemographics.Male++ : newDemographics.Female++
          newDepartments[person.department] = (newDepartments[person.department] || 0) + 1
          totalTreatmentCosts += person.treatmentCosts
        }

        setAvgTreatmentCost(totalTreatmentCosts / patientsData.length)
        setTotalPatients(patientsData.length)
        setTotalDoctors(doctorsData.length)
        setAvailableCars(carData.carCount)
        setDemographics(newDemographics)
        setDepartments(newDepartments)

        setLoading(false)
      } catch (e) {
        console.error('Error fetching data', e)
      }
    }

    fetchData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <Loading />

  return (
    <OverviewPage
      demographics={demographics}
      departments={departments}
      avgTreatmentCost={avgTreatmentCost}
      totalPatients={totalPatients}
      totalDoctors={totalDoctors}
      availableCars={availableCars}
    />
  )
}
