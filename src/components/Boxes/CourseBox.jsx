import React from 'react';
import styles from './C.module.scss';

import { Radio, RadioGroup } from 'rsuite';
import { useDispatch, useSelector } from 'react-redux';

import { updCourse } from '../../store/reducers/subFormSlice';
import coursesDB from '../../dbs/coursesDB';

const CourseBox = () => {
  const dispatch = useDispatch();
  const val = useSelector((state) => state.subForm.course);

  return (
    <RadioGroup
      className={styles.courses_group}
      inline={true}
      value={val}
      onChange={(value) => dispatch(updCourse(value))}
      style={{ marginTop: '10px' }}
    >
      {coursesDB.map((course) => (
        <Radio key={course.id} value={course.course}>
          {course.course}
        </Radio>
      ))}
    </RadioGroup>
  );
};

export default CourseBox;
