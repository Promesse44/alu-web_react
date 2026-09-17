import React from 'react';
import { render } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseList from './CourseList';

beforeEach(() => StyleSheetTestUtils.suppressStyleInjection());
afterEach(() => StyleSheetTestUtils.clearBufferAndResumeStyleInjection());

describe('CourseList', () => {
  it('renders without crashing', () => {
    render(<CourseList />);
  });

  it('renders 4 rows', () => {
    const { container } = render(<CourseList />);
    expect(container.querySelectorAll('tr')).toHaveLength(4);
  });
});
