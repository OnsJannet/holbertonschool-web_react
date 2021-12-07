import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';



const BodySectionWithMarginBottom = (props) => {
  return (
    <div className={css(styles.margin)}>
      <BodySection {...props} />
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string
};

BodySectionWithMarginBottom.defaultProps = {
  title: ''
};


const styles = StyleSheet.create({
  margin: {
    marginBottom: '40px'
  }
});

export default BodySectionWithMarginBottom;
