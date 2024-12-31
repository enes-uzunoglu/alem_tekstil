import React from "react";
import { useParams } from "react-router-dom";
export default function CategoryDetails() {
  const { gender, title } = useParams();
  return (
    <div>
      <p>Gender: {gender}</p>
      <p>Title: {title}</p>
    </div>
  );
}
