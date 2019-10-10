import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.input`
  border: 0;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.bgColor};
  height: 35px;
  font-size: 12px;
  padding: 0px 15px;
`;

const Input = ({ placeholder, type='text', required=true, value, onChange }) => <Container required={required} value={value} type={type} placeholder={placeholder} onChange={onChange} />;

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type : PropTypes.string,
  required : PropTypes.bool,
  onChange : PropTypes.func.isRequired,
  value : PropTypes.string.isRequired
};

export default Input;