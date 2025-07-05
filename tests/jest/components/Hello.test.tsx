import { render, screen } from '@testing-library/react';
import Hello from '../../../app/components/Hello'
test('نمایش اسم داخل h1', () => {
  render(<Hello name="Hussein" />);
  const heading = screen.getByText(/hello, hussein!/i);
  expect(heading).toBeInTheDocument();
});