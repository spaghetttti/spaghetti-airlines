import React from "react";

import "./options-item.styles.scss";

const OptionsItem = ({ title, sub_title, imgUrl, linkTo}) => (
  <div className="options-item box">
    <div className="options-title">
      <a href={linkTo}>{title}</a>
    </div>
    <div className="options-desc">{sub_title}</div>
  </div>
);

export default OptionsItem;
