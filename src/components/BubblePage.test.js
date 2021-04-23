import React from 'react';
import { render, waitFor } from '@testing-library/react';
import BubblePage from './BubblePage';
import { axiosWithAuth } from '../helpers/axiosWithAuth';

jest.mock('../helpers/axiosWithAuth');

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
  render(<BubblePage state={testData} />)
});

test('Fetches data and renders the bubbles on mounting', async () => {
  axiosWithAuth.mockResolvedValueOnce(testData);

  const mockAxiosWithAuth = jest.fn();

  render(<BubblePage state={testData} func={mockAxiosWithAuth} />)

  expect(await waitFor(() => mockAxiosWithAuth)).toHaveBeenCalled();
});
