import React from 'react';
import styles from './Form.module.scss';

import { Button, Input } from 'rsuite';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { useSubmitFormMutation } from '../../store/reducers/subFormReqSlice';
import CourseBox from '../Boxes/CourseBox';
import Spinner from '../Spinner/Spinner';

const Form = () => {
  const [submitForm, { isLoading }] = useSubmitFormMutation();

  const { course } = useSelector((state) => state.subForm);

  const handleSubmit = (event) => {
    event.preventDefault();

    const html = `
<b>Name:</b> ${event.target[0].value}
<b>Phone number:</b> ${event.target[1].value}
<b>Kurs:</b> ${course}
    `;

    if ((!event.target[0].value, !event.target[1].value, !course))
      toast.error("Hamma ma'lumotlarni to'ldiring!");
    else
      submitForm(html)
        .unwrap()
        .then(() => {
          toast.success("Ma'lumotlar muvaffaqiyatli jo'natildi");
          setTimeout(() => window.location.reload(), 1000);
        })
        .catch(() =>
          toast.error(
            "Ma'lumotlar to'g'riligini tekshiring yoki yana bir bor urinip ko'ring"
          )
        );
  };

  return (
    <div className={styles.container}>
      <h1>My School</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <Input placeholder='Name' />
        <Input type='number' placeholder='Number' />
        <div style={{ overflow: 'hidden' }}>
          <p>Kursni tanlang</p>
          <CourseBox />
        </div>
        <Button type='submit' color='blue' appearance='primary'>
          {isLoading ? <Spinner /> : "Ro'yxatdan o'tish"}
        </Button>
      </form>
    </div>
  );
};

export default Form;
