import { render, screen } from '@testing-library/react'
import SimpleCardInfo from './SimpleCardInfo'


describe('<SimpleCardInfo>', () => {
  test('it renders text properly', () => {
    render(<SimpleCardInfo data={0} text="Text" />)

    expect(screen.getByText('Text')).toBeVisible()
  })

  test('it renders numbers properly', () => {
    render(<SimpleCardInfo data={1000} />)

    expect(screen.getByTestId('data')).toHaveTextContent('1,000')
  })

  test('it renders currency properly', () => {
    render(<SimpleCardInfo data={12345.67} isCurrency={true} />)

    expect(screen.getByTestId('data')).toHaveTextContent('$12,345.67')
  })
})
