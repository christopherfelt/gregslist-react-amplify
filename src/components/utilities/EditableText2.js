import React, { useState } from "react";

export default function EditableText2({ children }) {
  // change to editable text group but no
  const [edit, setEdit] = useState(false);

  console.log(children)

  const onClickHandler = (e) => {
    // setEdit(!edit);
    console.log("did this work?");
  };

  return (
    <>
      {children.map((child) => (
        <div
          className={child.props.etdisable ? "" : "hover-shadow"}
          onClick={onClickHandler}
        >
          {edit && !child.props.etdisable ? (
            <input
              name={child.props.etfield}
              value={child.props.etstartvalue}
              onChange={child.props.etonchange}
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            child
          )}
        </div>
      ))}
    </>
  );
}
