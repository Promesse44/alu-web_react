import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders a normal row with the correct cells', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow textFirstCell="ES6" textSecondCell="60" />
        </tbody>
      </table>
    );

    expect(screen.getByText('ES6')).toBeInTheDocument();
    expect(screen.getByText('60')).toBeInTheDocument();
    expect(container.querySelector('tr')).toHaveStyle({ backgroundColor: '#f5f5f5ab' });
  });

  it('renders a header row and applies the header background style', () => {
    const { container } = render(
      <table>
        <thead>
          <CourseListRow isHeader textFirstCell="Course name" textSecondCell="Credit" />
        </thead>
      </table>
    );

    const row = container.querySelector('tr');
    expect(row).toHaveStyle({ backgroundColor: '#deb5b545' });
    expect(screen.getByText('Course name')).toBeInTheDocument();
    expect(screen.getByText('Credit')).toBeInTheDocument();
  });

  it('renders a normal row and applies the row background style', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow textFirstCell="React" textSecondCell="40" />
        </tbody>
      </table>
    );

    const row = container.querySelector('tr');
    expect(row).toHaveStyle({ backgroundColor: '#f5f5f5ab' });
  });
});
