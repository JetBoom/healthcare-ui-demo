import PropTypes from 'prop-types'
import Page from 'components/Page'
import { InfoCard, InfoCardGrid } from 'components/InfoCard'
import DoctorInfo from 'components/DoctorInfo'


DoctorsListPage.propTypes = {
  doctors: PropTypes.array.isRequired,
}

export default function DoctorsListPage({ doctors }) {
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
