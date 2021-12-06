import PropTypes from 'prop-types'
import Page from 'components/Page'


ErrorPage.propTypes = {
  /** An HTTP status code to give.*/
  code: PropTypes.number.isRequired,
  /** The actual error to give.*/
  children: PropTypes.any,
}

ErrorPage.defaultProps = {
  code: 404,
};

/**
 * A generic error page to display when something goes wrong.
 */
export default function ErrorPage({ code, children}) {
  return (
    <Page>
      <h1>Error {code}!</h1>
      <p>{children}</p>
    </Page>
  )
}
