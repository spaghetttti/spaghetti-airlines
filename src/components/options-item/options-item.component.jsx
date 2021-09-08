import React from "react";

import "./options-item.styles.scss";

const OptionsItem = ({ title, sub_title, add_text, imgUrl, linkTo}) => (
  <div className="options-item box">
    <div className="options-title">
      <a href={linkTo}>{title}</a>
    </div>
    <div className="options-desc">{sub_title}</div>
    <div className="options-desc">{add_text}</div>
  </div>
);

export default OptionsItem;
