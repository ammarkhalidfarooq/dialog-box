// Replace this file with your actual React component
import React from 'react';
import PropTypes from 'prop-types';
import './CustomForm.css';

const CustomForm = ({heading, onClick }) => (
  <div className="row animated fadeIn">
    <div className="col-12">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="x_panel">
            <div className="x_title">
              <h2>{heading}</h2>
              <div className="clearfix" />
            </div>
            <div className="x_content">
              <br />

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

CustomForm.propTypes = {
  heading: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

CustomForm.defaultProps = {
  heading: 'Custom Form',
  onClick: () => {},
};

export default CustomForm;