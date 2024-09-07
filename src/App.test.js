import { render, screen } from '@testing-library/react';
import Premiumpage from "./pages/premiumpage/premiumpage";

test('renders learn react link', () => {
  render(<Premiumpage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
