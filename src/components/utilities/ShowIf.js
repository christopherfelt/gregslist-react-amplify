import React from 'react'

export default function ShowIf ({show, children}) {
  return (
        <>
            {show && (children) }
        </>
    )
}
