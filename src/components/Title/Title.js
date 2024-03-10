import React from "react";

// Here if we want to change the style of 'title' across the entire project, we can chage it here.
export default function Title({ title, fontSize, margin }) {
  return <h1 style={{ fontSize, margin, color: '#616161' }}>{title}</h1>;
}
