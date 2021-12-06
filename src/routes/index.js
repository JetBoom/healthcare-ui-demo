import { Routes, Route } from 'react-router-dom'
import { OverviewRoute } from 'routes/overview'
import BarChartIcon from '@material-ui/icons/BarChart'
import { PatientsListRoute, PatientRoute } from 'routes/patients'
import PeopleIcon from '@material-ui/icons/People'
import { DoctorsListRoute } from 'routes/doctors'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import { DepartmentsListRoute } from 'routes/departments'
import HomeIcon from '@material-ui/icons/Home'
/*import { SettingsRoute } from 'routes/settings'
import SettingsIcon from '@material-ui/icons/Settings'*/
import { ErrorPage } from 'pages/error'


const RouteList = [
  {
    mainNavName: 'Overview',
    path: '/',
    exact: true,
    element: OverviewRoute,
    icon: BarChartIcon,
  },
  {
    mainNavName: 'Doctors',
    path: '/doctors',
    exact: true,
    element: DoctorsListRoute,
    icon: LocalHospitalIcon,
  },
  {
    mainNavName: 'Patients',
    path: '/patients',
    exact: true,
    element: PatientsListRoute,
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
    element: SettingsRoute,
    icon: SettingsIcon,
  },*/
  {
    path: 'patients/:patientId',
    element: PatientRoute,
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
