import { Avatar } from '@material-ui/core'
import HotelIcon from '@material-ui/icons/Hotel'
import GroupIcon from '@material-ui/icons/Group'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import PropTypes from 'prop-types'
import Page from 'components/Page'
import { InfoCard, InfoCardGrid } from 'components/InfoCard'
import SimpleCardInfo from 'components/SimpleCardInfo'


PatientPage.propTypes = {
  patient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    sex: PropTypes.string.isRequired,
    treatmentCosts: PropTypes.number.isRequired,
  }).isRequired,
}

/**
 * Page that displays info about a specific patient.
 */
export default function PatientPage({ patient }) {
  return (
    <Page>
      <InfoCardGrid>
        <InfoCard size="xl">
          <SimpleCardInfo
            data={`${patient.name} (${patient.age})`}
            text={patient.status}
            icon={<Avatar size="large" src={patient.avatarUrl} />}
            iconColor="transparent"
          />
        </InfoCard>

        <InfoCard size="sm">
          <SimpleCardInfo
            data={patient.sex}
            text="Sex"
            icon={<GroupIcon />}
            iconColor='red'
          />
        </InfoCard>

        <InfoCard size="md">
          <SimpleCardInfo
            data={patient.treatmentCosts}
            isCurrency={true}
            text="Total Treat. Costs"
            icon={<AccountBalanceWalletIcon />}
            iconColor='skyblue'
          />
        </InfoCard>

        <InfoCard size="sm">
          <SimpleCardInfo
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
