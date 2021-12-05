import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Avatar } from '@material-ui/core'
import HotelIcon from '@material-ui/icons/Hotel'
import GroupIcon from '@material-ui/icons/Group'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import Page from 'components/Page'
import { InfoCard, InfoCardGrid } from 'components/InfoCard'
import SimpleNumberInfo from 'components/SimpleNumberInfo'
import Loading from 'components/Loading'
import { GET } from 'util/dev'


export default function PatientPage() {
  const { patientId } = useParams()
  const [loading, setLoading] = useState(true)
  const [patient, setPatient] = useState({})

  useEffect(() => {
    // useEffect can't use an async function so we call it this way.
    const fetchData = async () => {
      setLoading(true)

      try {
        const patientsData = await GET('/testdata/patients.json', 'json')

        const patientData = patientsData[patientId]
        if (!patientData) {
          throw new Error('Patient not found')
        }

        setPatient(patientData)

        setLoading(false)
      } catch (e) {
        console.error(`Error fetching data: ${e}`)
      }
    }

    fetchData()
  }, [patientId])

  if (loading) return <Loading />

  return (
    <Page>
      <InfoCardGrid>
        <InfoCard size="xl">
          <SimpleNumberInfo
            data={`${patient.name} (${patient.age})`}
            text="Name & Age"
            icon={<Avatar size="large" src={patient.avatarUrl} />}
            iconColor="transparent"
          />
        </InfoCard>

        <InfoCard size="sm">
          <SimpleNumberInfo
            data={patient.sex}
            text="Sex"
            icon={<GroupIcon />}
            iconColor='red'
          />
        </InfoCard>

        <InfoCard size="md">
          <SimpleNumberInfo
            data={patient.treatmentCosts}
            isCurrency={true}
            text="Total Treat. Costs"
            icon={<AccountBalanceWalletIcon />}
            iconColor='skyblue'
          />
        </InfoCard>

        <InfoCard size="sm">
          <SimpleNumberInfo
            data={patient.department}
            text="Department"
            icon={<HotelIcon />}
            iconColor='orange'
          />
        </InfoCard>
      </InfoCardGrid>
    </Page>
  )
}
