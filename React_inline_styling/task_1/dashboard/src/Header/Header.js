import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../App/holberton-logo.jpg';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottom: '4px solid #e01d3f',
    padding: '10px 20px',
  },
  logo: {
    height: '200px',
    width: 'auto',
    marginRight: '20px',
  },
  title: {
    fontSize: '2rem',
    color: '#e01d3f',
  },
});

function Header() {
  return (
    <div className={`App-header ${css(styles.header)}`}>
      <img src={logo} alt="holberton logo" className={css(styles.logo)} />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </div>
  );
}

export default Header;
