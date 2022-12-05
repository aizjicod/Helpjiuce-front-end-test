import { render } from '@testing-library/react';
import TextEditor from '../components/text-editor';
import '../setupTests';

it('renders the right component', () => {
  const { container } = render(<TextEditor />);
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the rigth last component', () => {
  const { container } = render(<TextEditor />);
  expect(container.querySelector('#add-block')).toBeTruthy();
  expect(container.lastChild).toMatchSnapshot();
});
