import { render } from '@testing-library/react';
import React from 'react';
import BodySection from './BodySection';

describe('BodySection', () => {
  it('renders h2 and children correctly', () => {
    const { container, getByText } = render(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    expect(container.querySelectorAll('h2').length).toBe(1);
    expect(getByText('test title')).toBeInTheDocument();
    expect(container.querySelectorAll('p').length).toBe(1);
    expect(getByText('test children node')).toBeInTheDocument();
  });
});
