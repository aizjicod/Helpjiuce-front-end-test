import { render, screen } from '@testing-library/react';
import AddBlock from '../components/add-block';
import '../setupTests';

it('renders the right component', () => {
  const { container } = render(<AddBlock />);
  expect(container.querySelector('.add-block-title')).toBeInTheDocument();
  expect(screen.getByText(/Add blocks/)).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();
});
it('renders the rigth last component', () => {
  const { container } = render(<AddBlock />);
  expect(screen.getByText(/expendable Heading 1/)).toBeTruthy();
  expect(container.lastChild).toMatchSnapshot();
});
