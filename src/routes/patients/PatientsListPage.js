import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar, IconButton } from '@material-ui/core'
import LaunchIcon from '@material-ui/icons/Launch'
import DataTable from 'components/DataTable'
import Page from 'components/Page'
import Loading from 'components/Loading'
import { GET } from 'util/dev'


export default function PatientsListPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [patients, setPatients] = useState([])

  useEffect(() => {
    // useEffect can't use an async function so we call it this way.
    const fetchData = async () => {
      setLoading(true)

      try {
        const patientsData = await GET('/testdata/patients.json', 'json')

        setPatients(patientsData)

        setLoading(false)
      } catch (e) {
        console.error(`Error fetching data: ${e}`)
      }
    }

    fetchData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
      name: 'Treatment Costs',
      selector: (row) => row.treatmentCosts,
      format: (row) => row.treatmentCosts.toLocaleString('en-US', {style: 'currency', currency: 'USD'}),
      sortable: true,
      right: true,
    },
  ]), []) // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) return <Loading />

  return (
    <Page>
      <div style={{width: '100%'}}>
        <DataTable
          title="All Patients"
          data={patients}
          columns={columns}
        />
      </div>
    </Page>
  )
}
