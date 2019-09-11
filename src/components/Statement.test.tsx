import React from 'react';
import { render } from '@testing-library/react';
import wait from 'waait';

import Statement from './Statement';
import { act } from 'react-dom/test-utils';

describe('<Statement />', () => {
  it('should render without an error', () => {
    render(<Statement />);
  });

  it('should show the first statement', () => {
    const { getByText } = render(<Statement />);
    expect(getByText('frontend developer'));
  });

  it('should update after time interval', async () => {
    await act(async () => {
      const { getByText, rerender } = render(
        <Statement animationDuration={0.001} />
      );
      expect(getByText('frontend developer'));
      await wait(20);
      rerender(<Statement />);
      expect(getByText('backend developer'));
    });
  });
});
