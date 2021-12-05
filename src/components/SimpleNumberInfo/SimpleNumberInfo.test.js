import { render, screen } from '@testing-library/react';
import SimpleNumberInfo from './SimpleNumberInfo';


describe('<SimpleNumberInfo>', () => {
  test('it renders text properly', () => {
    render(<SimpleNumberInfo data={0} text="Text" />)

    expect(screen.getByText('Text')).toBeVisible()
  })

  test('it renders numbers properly', () => {
    render(<SimpleNumberInfo data={1000} />)

    expect(screen.getByTestId('data')).toHaveTextContent('1,000')
  })

  test('it renders currency properly', () => {
    render(<SimpleNumberInfo data={1000} isCurrency={true} />)

    expect(screen.getByTestId('data')).toHaveTextContent('$1,000.00')
  })
})
