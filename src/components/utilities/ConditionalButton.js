import React from 'react'
export default function ConditionalButton({showIf, children}) {
  return (
    <>
      {showIf && (children)}
    </>
  );
}
