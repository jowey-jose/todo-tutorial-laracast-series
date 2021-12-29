import React from "react";

export default function Another(props) {
  return (
    <div>
      {/* Accepting the Passed prop here, can destructure as well::*/}
      Another Component, {props.name}
    </div>
  );
}
