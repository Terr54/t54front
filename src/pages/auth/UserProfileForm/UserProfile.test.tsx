import React from 'react'
import { render, screen } from '@testing-library/react'
import UserProfileForm from './UserProfileForm.page'

test('renders learn react link', () => {
  render(<UserProfileForm />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
