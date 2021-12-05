import { BrowserRouter } from 'react-router-dom'
import AppTheme from 'AppTheme'
import { MainRouter } from 'routes'
import NavigationMenu from 'components/NavigationMenu'
import SiteHeader from 'components/SiteHeader'
import 'App.scss'


export default function App() {
  return (
    <AppTheme>
      <BrowserRouter>
        <SiteHeader />
        <main>
          <NavigationMenu />
          <MainRouter />
        </main>
      </BrowserRouter>
    </AppTheme>
  )
}
