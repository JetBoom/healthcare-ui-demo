import { useState, useEffect } from 'react'
import Page from 'components/Page'
import Loading from 'components/Loading'
import { InfoCard, InfoCardGrid } from 'components/InfoCard'
import DoctorInfo from 'components/DoctorInfo'
import { GET } from 'util/dev'


export default function DoctorsListPage() {
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

  return (
    <Page>
      <InfoCardGrid>
        {doctors.map((doctor, index) => (
          <InfoCard key={index} size="xl" noEffects={true}>
            <DoctorInfo doctor={doctor} />
          </InfoCard>
        ))}
      </InfoCardGrid>
    </Page>
  )
}
