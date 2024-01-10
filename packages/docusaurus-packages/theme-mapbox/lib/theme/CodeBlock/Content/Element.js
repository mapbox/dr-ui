/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@theme/CodeBlock/Container';
import CodeBlockTitle from '@theme/CodeBlock/Title';

export default function CodeBlockJSX({
  title,
  link,
  toggle,
  children,
  className
}) {
  return (
    <>
      <Container
        as="div"
        tabIndex={0}
        className={clsx('thin-scrollbar', className)}
      >
        <CodeBlockTitle title={title} link={link} toggle={toggle} />
        <pre className="px0 py0">
          <code>{children}</code>
        </pre>
      </Container>
    </>
  );
}

CodeBlockJSX.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  toggle: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string
};
