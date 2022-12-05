import { render, screen } from '@testing-library/react';
import TextBlock from '../components/text-block';
import '../setupTests';

it('renders the right h1 component', () => {
  const { container } = render(<TextBlock option={1} text="this is a h1" index={1} />);
  expect(container.querySelector('.heading1')).toBeInTheDocument();
  expect(screen.getByText(/this is a h1/)).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();
});
it('renders the right p component', () => {
  const { container } = render(<TextBlock option={0} text="this is a p" index={1} />);
  expect(screen.getByText(/this is a p/)).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();
});
