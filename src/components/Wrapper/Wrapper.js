import React, { Component } from "react";
import "./Wrapper.css";

const Wrapper = props => <div className = {props.shakeWrapper === "true" ? "wrapperShake" : "wrapper"}>{props.pictures}</div>

export default Wrapper;