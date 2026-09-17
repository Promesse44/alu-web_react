import React from 'react';

function CourseList() {
  return (
    <div className="CourseList">
      <table>
        <thead>
          <tr>
            <th>Available courses</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ES6</td>
            <td>60</td>
          </tr>
          <tr>
            <td>Webpack</td>
            <td>20</td>
          </tr>
          <tr>
            <td>React</td>
            <td>40</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CourseList;
