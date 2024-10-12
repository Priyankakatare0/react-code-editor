import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const CodeEditor = () => {
  return (
    <CodeMirror
      value="// Start coding here!"
      height="300px"
      extensions={[javascript()]}
      onChange={(value, viewUpdate) => {
        console.log('value:', value);
      }}
    />
  );
};

export default CodeEditor;
