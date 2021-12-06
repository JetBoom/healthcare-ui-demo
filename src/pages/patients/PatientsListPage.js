import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Avatar, IconButton } from '@material-ui/core'
import LaunchIcon from '@material-ui/icons/Launch'
import DataTable from 'components/DataTable'
import Page from 'components/Page'


PatientsListPage.propTypes = {
  patients: PropTypes.array.isRequired,
}

/**
 * Page that displays info about all patients in a list.
 */
export default function PatientsListPage({ patients }) {
  const navigate = useNavigate()

  const columns = useMemo(() => ([
    {
      name: 'Name',
      selector: (row) => row.name,
      format: (row, patientId) => (
        <div style={{display: 'flex', alignItems: 'center'}}>
          <Avatar alt="" src={row.avatarUrl} style={{marginRight: '1ch'}} />
          <span>{row.name}</span>
          <IconButton size="small" onClick={() => navigate(`/patients/${patientId}`)}>
            <LaunchIcon fontSize="small" />
          </IconButton>
        </div>
      ),
      sortable: true,
      grow: 2,
    },
    {
      name: 'Age',
      selector: (row) => row.age,
      sortable: true,
    },
    {
      name: 'Sex',
      selector: (row) => row.sex,
      sortable: true,
      right: true,
    },
    {
      name: 'Department',
      selector: (row) => row.department,
      sortable: true,
      right: true,
    },
    {
      name: 'Treatment Costs',
      selector: (row) => row.treatmentCosts,
      format: (row) => row.treatmentCosts.toLocaleString('en-US', {style: 'currency', currency: 'USD'}),
      sortable: true,
      right: true,
    },
  ]), []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Page>
      <div style={{width: '100%'}}>
        <DataTable
          title="All Patients"
          pagination={true}
          data={patients}
          columns={columns}
        />
      </div>
    </Page>
  )
}
