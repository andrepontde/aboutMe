import { render } from '@testing-library/react';
import App from './App';

// Mock canvas for testing environment
HTMLCanvasElement.prototype.getContext = jest.fn(() => ({
  fillStyle: '',
  fillRect: jest.fn(),
}));

test('renders portfolio app', () => {
  // Mock getElementById to return a canvas element
  const mockCanvas = document.createElement('canvas');
  document.getElementById = jest.fn(() => mockCanvas);
  
  render(<App />);
  // Just test that the component renders without crashing
  expect(document.body).toBeTruthy();
});
