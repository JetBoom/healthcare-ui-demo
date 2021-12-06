import PropTypes from 'prop-types'
import Page from 'components/Page'


ErrorPage.propTypes = {
  code: PropTypes.number.isRequired,
}

ErrorPage.defaultProps = {
  code: 404,
};

export default function ErrorPage({ code, children}) {
  return (
    <Page>
      <h1>Error {code}!</h1>
      <p>{children}</p>
    </Page>
  )
}
