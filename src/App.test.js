import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

test('App div contains expected text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn React Testing!/i);
  expect(linkElement).toBeInTheDocument();
});

test('App div contains expected text 2', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain('Learn React Testing!');
  ReactDOM.unmountComponentAtNode(div);
})
