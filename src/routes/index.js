import { Routes, Route } from 'react-router-dom'
import { OverviewPage } from 'routes/overview'
import BarChartIcon from '@material-ui/icons/BarChart'
import { PatientsListPage, PatientPage } from 'routes/patients'
import PeopleIcon from '@material-ui/icons/People'
import { DoctorsListPage } from 'routes/doctors'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import { DepartmentsListRoute } from 'routes/departments'
import HomeIcon from '@material-ui/icons/Home'
/*import { SettingsPage } from 'routes/settings'
import SettingsIcon from '@material-ui/icons/Settings'*/
import { ErrorPage } from 'pages/error'


const RouteList = [
  {
    mainNavName: 'Overview',
    path: '/',
    exact: true,
    element: OverviewPage,
    icon: BarChartIcon,
  },
  {
    mainNavName: 'Doctors',
    path: '/doctors',
    exact: true,
    element: DoctorsListPage,
    icon: LocalHospitalIcon,
  },
  {
    mainNavName: 'Patients',
    path: '/patients',
    exact: true,
    element: PatientsListPage,
    icon: PeopleIcon,
  },
  {
    mainNavName: 'Departments',
    path: '/departments',
    exact: true,
    element: DepartmentsListRoute,
    icon: HomeIcon,
  },
  /*{
    mainNavName: 'Settings',
    path: '/settings',
    exact: true,
    element: SettingsPage,
    icon: SettingsIcon,
  },*/
  {
    path: 'patients/:patientId',
    element: PatientPage,
  },
]

function MainRouter() {
  return (
    <Routes>
      {RouteList.map((route, routeIdx) => (
        <Route
          key={routeIdx}
          path={route.path}
          exact={route.exact}
          element={<route.element />}
        />
      ))}

      <Route path="*" element={<ErrorPage code={404} message="Not found" />} />
    </Routes>
  )
}

export default RouteList
export { RouteList, MainRouter }
