import { useState, useEffect, useMemo } from 'react'
import { CircularProgress } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import HotelIcon from '@material-ui/icons/Hotel'
import GroupIcon from '@material-ui/icons/Group'
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import Page from 'components/Page'
import InfoCardGrid from 'components/InfoCardGrid'
import InfoCard from 'components/InfoCard'
import InfoCardHeader from 'components/InfoCardHeader'
import InfoCardTitle from 'components/InfoCardTitle'
import SimpleNumberInfo from 'components/SimpleNumberInfo'
import { GET } from 'util/dev'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'



export default function OverviewPage() {
  const { palette } = useTheme()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})

  useEffect(() => {
    // useEffect can't use an async function so we call it this way.
    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await GET(`/testdata/overview.json`)
        const json = await response.json()
        console.log(json)
        setData(json)
      } catch (e) {
        console.error(`Error fetching data: ${e}`)
      } finally {
        setLoading(false)
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
          { y: data.patients.demographics.Female, name: 'Female', color: palette.primary.main },
          { y: data.patients.demographics.Male, name: 'Male', color: palette.secondary.main }
        ]
      }]
    }
  }, [loading]) // eslint-disable-line react-hooks/exhaustive-deps

  const divisionChartOptions = useMemo(() => {
    if (loading) return {}

    const departmentCounts = data.patients.departments
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

  if (loading) return <CircularProgress />

  return (
    <Page>
      <InfoCardGrid>
        <InfoCard size="sm">
          <SimpleNumberInfo
            data={data.patients.total}
            text="Total Patients"
            icon={<HotelIcon />}
            iconColor='violet'
          />
        </InfoCard>

        <InfoCard size="sm">
          <SimpleNumberInfo
            data={data.staffCount}
            text="Available Staff"
            icon={<GroupIcon />}
            iconColor='red'
          />
        </InfoCard>

        <InfoCard size="sm">
          <SimpleNumberInfo
            data={data.avgTreatmentCost}
            isCurrency={true}
            text="Avg Treat. Costs"
            icon={<AccountBalanceWalletIcon />}
            iconColor='skyblue'
          />
        </InfoCard>

        <InfoCard size="sm">
          <SimpleNumberInfo
            data={data.carCount}
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
            <InfoCardTitle>Patients by Gender</InfoCardTitle>
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
