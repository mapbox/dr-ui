import React from 'react';
export default function MDXTable(props) {
  return (
    <div className="overflow-auto mb18">
      <table {...props}>{props.children}</table>
    </div>
  );
}
