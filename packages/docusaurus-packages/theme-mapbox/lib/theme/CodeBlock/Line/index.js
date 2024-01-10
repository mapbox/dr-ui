/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';

export default function CodeBlockLine({
  line,
  classNames,
  showLineNumbers,
  getLineProps,
  getTokenProps,
  highlight
}) {
  if (line.length === 1 && line[0].content === '\n') {
    line[0].content = '';
  }
  const lineProps = getLineProps({
    line,
    className: classNames
  });
  const lineTokens = line.map((token, key) => (
    <span key={key} {...getTokenProps({ token, key })} />
  ));
  return (
    <span
      {...lineProps}
      style={{
        display: 'table-row',
        counterIncrement: 'line-count'
      }}
    >
      {showLineNumbers ? (
        <>
          <div
            className={clsx('h-full w6', {
              'bg-blue': highlight,
              'bg-transparent': !highlight
            })}
            style={{ display: 'table-cell', userSelect: 'none' }}
          >
            &nbsp;
          </div>
          <span
            className="codeLineNumber pr12 left sticky align-r"
            style={{
              paddingLeft: 8,
              display: ' table-cell',
              width: '1%',
              overflowWrap: 'normal'
            }}
          />
          <span className="pr12">{lineTokens}</span>
        </>
      ) : (
        lineTokens
      )}
      <br />
    </span>
  );
}
