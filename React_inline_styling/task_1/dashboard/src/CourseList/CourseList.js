import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';

const styles = StyleSheet.create({
  list: {
    width: '100%',
    borderCollapse: 'collapse',
  },
});

function CourseList() {
  return (
    <div className="CourseList">
      <table className={css(styles.list)}>
        <thead>
          <CourseListRow
            isHeader
            textFirstCell="Available courses"
            textSecondCell="Credit"
          />
        </thead>
        <tbody>
          <CourseListRow textFirstCell="ES6" textSecondCell="60" />
          <CourseListRow textFirstCell="Webpack" textSecondCell="20" />
          <CourseListRow textFirstCell="React" textSecondCell="40" />
        </tbody>
      </table>
    </div>
  );
}

export default CourseList;
