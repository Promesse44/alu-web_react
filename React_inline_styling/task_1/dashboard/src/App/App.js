import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import Header from '../Header/Header';

const styles = StyleSheet.create({
  App: {
    fontFamily: 'Arial, sans-serif',
  },
  body: {
    padding: '20px',
    minHeight: '60vh',
  },
  footer: {
    borderTop: '4px solid #e01d3f',
    padding: '10px 20px',
    fontSize: '0.8rem',
    textAlign: 'center',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className={css(styles.App)}>
        <Header />
        <div className={`App-body ${css(styles.body)}`}>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </BodySection>
        </div>
        <div className={`App-footer ${css(styles.footer)}`}>
          <p>Copyright 2020 - holberton School</p>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
