import { render, screen } from '@testing-library/react'
import DoctorInfo from './DoctorInfo'


const doctor = {
  name: 'John Smith',
  title: 'MD',
  department: 'Surgery',
  avatarUrl: '/testcontent/pfp1.jpg',
}

describe('<DoctorInfo>', () => {
  test('it renders', () => {
    expect(
      () => render(<DoctorInfo doctor={doctor} />)
    ).not.toThrow()

    expect(screen.getByTestId('doctorinfo')).toBeVisible()

    expect(screen.getByTestId('nametitle')).toHaveTextContent(`${doctor.name}, ${doctor.title}`)

    expect(screen.getByTestId('department')).toHaveTextContent(doctor.department)

    expect(screen.getByTestId('avatar')).toBeVisible()

    expect(screen.getByTestId('bio')).toBeVisible()
  })
})
