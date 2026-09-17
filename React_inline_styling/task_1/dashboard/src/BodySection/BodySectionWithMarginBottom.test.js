import { render } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

beforeEach(() => StyleSheetTestUtils.suppressStyleInjection());
afterEach(() => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());

describe('BodySectionWithMarginBottom', () => {
  it('renders BodySection with correct props', () => {
    const { container, getByText } = render(
      <BodySectionWithMarginBottom title="test title">
        <p>test children</p>
      </BodySectionWithMarginBottom>
    );
    expect(container.querySelector('.bodySection')).toBeInTheDocument();
    expect(getByText('test title')).toBeInTheDocument();
    expect(getByText('test children')).toBeInTheDocument();
  });
});
