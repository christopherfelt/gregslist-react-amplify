import React, { useState } from 'react'

export default function EditableText({field, startValue, handleChange, disable, children}) {
  const [edit, setEdit] = useState(false);

  const onClickHandler = (e) => {
      setEdit(!edit);
      console.log()
  }

  return (
    <div className={(disable ? "" : "hover-shadow")} onClick={onClickHandler}>
        {
            edit && !disable ? <input name={field} value={startValue} onChange={handleChange} onClick={(e) => (e.stopPropagation()) } /> : children
        }
    </div>
  )
}
