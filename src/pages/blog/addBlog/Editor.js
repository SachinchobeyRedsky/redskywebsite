import React from 'react'
import ReactQuill from 'react-quill'
export default function Editor({ forwardedRef, ...props }) {
  return <ReactQuill {...props} ref={forwardedRef} />;
}
