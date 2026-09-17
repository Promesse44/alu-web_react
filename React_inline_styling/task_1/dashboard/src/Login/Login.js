import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  Login: {
    margin: '20px',
  },
  label: {
    marginRight: '8px',
    marginLeft: '16px',
  },
});

function Login() {
  return (
    <div className={css(styles.Login)}>
      <p>Login to access the full dashboard</p>
      <label className={css(styles.label)} htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <label className={css(styles.label)} htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <button type="button">OK</button>
    </div>
  );
}

export default Login;
