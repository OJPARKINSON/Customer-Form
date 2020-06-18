import React from 'react'
import {cleanup, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import App from './App'

afterEach(cleanup);

test('renders a message', () => {
      const { queryByText } = render(<App />); 
      expect(queryByText('What would you rate our service:')).toBeInTheDocument()
});