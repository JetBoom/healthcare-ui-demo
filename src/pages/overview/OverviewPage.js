import { useMemo } from 'react'
import PropTypes from 'prop-types'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useTheme } from '@material-ui/core/styles'
import HotelIcon from '@material-ui/icons/Hotel'
import GroupIcon from '@material-ui/icons/Group'
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import Page from 'components/Page'
import { InfoCard, InfoCardGrid, InfoCardHeader, InfoCardTitle } from 'components/InfoCard'
import SimpleCardInfo from 'components/SimpleCardInfo'


OverviewPage.propTypes = {
  /** Demographics tally object */
  demographics: PropTypes.object.isRequired,
  /** Status tally object */
  statuses: PropTypes.object.isRequired,
  /** Departments tally object */
  departments: PropTypes.object.isRequired,
  /** Average treatment cost of all patients. */
  avgTreatmentCost: PropTypes.number.isRequired,
  totalPatients: PropTypes.number.isRequired,
  totalDoctors: PropTypes.number.isRequired,
  /** Number of cars we have ready to go. */
  availableCars: PropTypes.number.isRequired,
}

/**
 * Page that displays aggregate data and some charts.
 */
export default function OverviewPage(props) {
  const {
    demographics,
    statuses,
    departments,
    avgTreatmentCost,
    totalPatients,
    totalDoctors,
    availableCars,
  } = props

  const { palette } = useTheme()

  const demographicsChartOptions = useMemo(() => ({
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
        { y: demographics.Female, name: 'Female', color: palette.primary.main },
        { y: demographics.Male, name: 'Male', color: palette.secondary.main }
      ]
    }]
  }), [demographics]) // eslint-disable-line react-hooks/exhaustive-deps

  const divisionChartOptions = useMemo(() => {
    const departmentCounts = departments
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
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const statusChartOptions = useMemo(() => ({
    title: { text: undefined },
    chart: {
      height: 200,
      backgroundColor: 'transparent',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '100%'],
        size: '150%',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [{
      type: 'pie',
      innerSize: '50%',
      name: 'Patients',
      data: [
        { y: statuses.Inpatient, name: 'Inpatient', color: palette.primary.main },
        { y: statuses.Outpatient, name: 'Outpatient', color: palette.secondary.main }
      ]
    }]
  }), [demographics]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Page>
      <InfoCardGrid>
        <InfoCard size="sm">
          <SimpleCardInfo
            data={totalPatients}
            text="Total Patients"
            icon={<HotelIcon />}
            iconColor='violet'
          />
        </InfoCard>

        <InfoCard size="sm">
          <SimpleCardInfo
            data={totalDoctors}
            text="Total Doctors"
            icon={<GroupIcon />}
            iconColor='red'
          />
        </InfoCard>

        <InfoCard size="sm">
          <SimpleCardInfo
            data={avgTreatmentCost}
            isCurrency={true}
            text="Avg Treat. Costs"
            icon={<AccountBalanceWalletIcon />}
            iconColor='skyblue'
          />
        </InfoCard>

        <InfoCard size="sm">
          <SimpleCardInfo
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
            options={demographicsChartOptions}
          />
        </InfoCard>

        <InfoCard size="sm">
          <InfoCardHeader>
            <InfoCardTitle>Patients by Status</InfoCardTitle>
          </InfoCardHeader>
          <HighchartsReact
            highcharts={Highcharts}
            options={statusChartOptions}
          />
        </InfoCard>
      </InfoCardGrid>
    </Page>
  )
}
