import { useMemo } from 'react'
import PropTypes from 'prop-types'
import Page from 'components/Page'
import DataTable from 'components/DataTable'


DepartmentsListPage.propTypes = {
  departments: PropTypes.array.isRequired,
}

export default function DepartmentsListPage({ departments }) {
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
  ]), [])

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
