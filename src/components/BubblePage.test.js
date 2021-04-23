import React from 'react';
import { render, waitFor } from '@testing-library/react';
import BubblePage from './BubblePage';

const testData = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff",
    },
    id: 1,
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc",
    },
    id: 2,
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff",
    },
    id: 3,
  }
];

test('Renders BubblePage without errors', () => {
  render(<BubblePage />);
});

test('Fetches data and renders the bubbles on mounting', async () => {
  // const mockAxiosWithAuth = jest.fn();

  // render(<BubblePage func={mockAxiosWithAuth} />)

  // expect(await waitFor(() => mockAxiosWithAuth)).toHaveBeenCalled();
});
