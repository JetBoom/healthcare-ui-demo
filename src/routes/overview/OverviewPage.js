import { useState, useEffect, useMemo } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useTheme } from '@material-ui/core/styles'
import HotelIcon from '@material-ui/icons/Hotel'
import GroupIcon from '@material-ui/icons/Group'
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import Page from 'components/Page'
import Loading from 'components/Loading'
import { InfoCard, InfoCardGrid, InfoCardHeader, InfoCardTitle } from 'components/InfoCard'
import SimpleNumberInfo from 'components/SimpleNumberInfo'
import { GET } from 'util/dev'


export default function OverviewPage() {
  const { palette } = useTheme()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})
  const [avgTreatmentCost, setAvgTreatmentCost] = useState(0)
  const [totalPatients, setTotalPatients] = useState(0)
  const [totalStaff, setTotalStaff] = useState(0)
  const [availableCars, setAvailableCars] = useState(0)

  useEffect(() => {
    // useEffect can't use an async function so we call it this way.
    const fetchData = async () => {
      setLoading(true)

      try {
        const [overviewRes, patientsRes] = await Promise.all([
          GET(`/testdata/overview.json`),
          GET(`/testdata/patients.json`),
        ])
        const overviewData = await overviewRes.json()
        const patientsData = await patientsRes.json()

        // Aggregate data from all our test json in to a data object.
        // Totally messy, wouldn't be done like this with real data.
        const demographics = { Male: 0, Female: 0 }
        const departments = {}
        let totalTreatmentCosts = 0
        for (let person of patientsData) {
          person.sex === 'Male' ? demographics.Male++ : demographics.Female++
          departments[person.department] = (departments[person.department] || 0) + 1
          totalTreatmentCosts += person.treatmentCosts
        }

        const newData = {
          patients: patientsData,
          overview: overviewData,
          demographics,
          departments,
        }

        setData(newData)
        setAvgTreatmentCost(totalTreatmentCosts / patientsData.length)
        setTotalPatients(patientsData.length)
        setTotalStaff(overviewData.totalStaff)
        setAvailableCars(overviewData.carCount)

        setLoading(false)
      } catch (e) {
        console.error(`Error fetching data: ${e}`)
      }
    }

    fetchData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const genderChartOptions = useMemo(() => {
    if (loading) return {}

    return {
      title: { text: undefined },
      chart: {
        height: 200,
        backgroundColor: 'transparent',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          },
          showInLegend: true,
        },
      },
      series: [{
        type: 'pie',
        name: 'Patients',
        data: [
          { y: data.demographics.Female, name: 'Female', color: palette.primary.main },
          { y: data.demographics.Male, name: 'Male', color: palette.secondary.main }
        ]
      }]
    }
  }, [loading]) // eslint-disable-line react-hooks/exhaustive-deps

  const divisionChartOptions = useMemo(() => {
    if (loading) return {}

    const departmentCounts = data.departments
    const series = []
    for (let name in departmentCounts) {
      series.push({
        name,
        data: [ [ name, departmentCounts[name] ] ]
      })
    }

    return {
      title: { text: undefined },
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
        height: 200,
      },
      plotOptions: {
        column: {
          cursor: 'pointer',
          dataLabels: { enabled: true },
          showInLegend: true,
        },
      },
      xAxis: {
        visible: false,
      },
      yAxis: {
        title: {
          text: 'Patients'
        }
      },
      series,
    }
  }, [loading]) // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <Loading />

  return (
    <Page>
      <InfoCardGrid>
        <InfoCard size="sm">
          <SimpleNumberInfo
            data={totalPatients}
            text="Total Patients"
            icon={<HotelIcon />}
            iconColor='violet'
          />
        </InfoCard>

        <InfoCard size="sm">
          <SimpleNumberInfo
            data={totalStaff}
            text="Total Staff"
            icon={<GroupIcon />}
            iconColor='red'
          />
        </InfoCard>

        <InfoCard size="sm">
          <SimpleNumberInfo
            data={avgTreatmentCost}
            isCurrency={true}
            text="Avg Treat. Costs"
            icon={<AccountBalanceWalletIcon />}
            iconColor='skyblue'
          />
        </InfoCard>

        <InfoCard size="sm">
          <SimpleNumberInfo
            data={availableCars}
            text="Available Cars"
            icon={<AirportShuttleIcon />}
            iconColor='orange'
          />
        </InfoCard>

        <InfoCard>
          <InfoCardHeader>
            <InfoCardTitle>Patients by Division</InfoCardTitle>
          </InfoCardHeader>
          <HighchartsReact
            highcharts={Highcharts}
            options={divisionChartOptions}
          />
        </InfoCard>

        <InfoCard size="sm">
          <InfoCardHeader>
            <InfoCardTitle>Patient Demographics</InfoCardTitle>
          </InfoCardHeader>
          <HighchartsReact
            highcharts={Highcharts}
            options={genderChartOptions}
          />
        </InfoCard>
      </InfoCardGrid>
    </Page>
  )
}
