import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Header from './Header';

describe('<Header />', () => {
  it('should render without crashing', () => {
    render(<Header />);
  });

  it('should render a clickable header', () => {
    const { getByText } = render(<Header />);
    const element = getByText('andersnylund');
    fireEvent.click(element);
  });
});
