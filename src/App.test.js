import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('render',()=>{
  render(<App/>);
  const nullElement = screen.getByText(/akira/);
  expect(nullElement).toBeInTheDocument();
})