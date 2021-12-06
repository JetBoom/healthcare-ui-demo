import { useState, useEffect } from 'react'
import Loading from 'components/Loading'
import { DoctorsListPage } from 'pages/doctors'
import { GET } from 'util/dev'


export default function DoctorsListRoute() {
  const [loading, setLoading] = useState(true)
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const doctorsData = await GET('/testdata/doctors.json', 'json')

        setDoctors(doctorsData)

        setLoading(false)
      } catch (e) {
        console.error(`Error fetching data: ${e}`)
      }
    }

    fetchData()
  }, [])

  if (loading) return <Loading />

  return <DoctorsListPage doctors={doctors} />
}
