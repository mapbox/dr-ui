/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import { useThemeConfig, usePrismTheme } from '@docusaurus/theme-common';
import {
  parseCodeBlockTitle,
  parseLanguage,
  parseLines,
  containsLineNumbers,
  useCodeWordWrap
} from '@docusaurus/theme-common/internal';
import { Highlight } from 'prism-react-renderer';
import Line from '@theme/CodeBlock/Line';
// import CopyButton from '@theme/CodeBlock/CopyButton';
import CopyButton from '@mapbox/mr-ui/copy-button';
import WordWrapButton from '@theme/CodeBlock/WordWrapButton';
import Container from '@theme/CodeBlock/Container';
import CodeBlockTitle from '@theme/CodeBlock/Title';
import onCopy from '@theme/CodeBlock/on-copy';
// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language) {
  return language?.toLowerCase();
}
export default function CodeBlockString({
  children,
  className: blockClassName = '',
  metastring,
  title: titleProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp,
  link,
  toggle,
  maxHeight,
  addonButtons
}) {
  const {
    prism: { defaultLanguage, magicComments }
  } = useThemeConfig();
  const language = normalizeLanguage(
    languageProp ?? parseLanguage(blockClassName) ?? defaultLanguage
  );
  const prismTheme = usePrismTheme();
  const wordWrap = useCodeWordWrap();
  // We still parse the metastring in case we want to support more syntax in the
  // future. Note that MDX doesn't strip quotes when parsing metastring:
  // "title=\"xyz\"" => title: "\"xyz\""
  const title = parseCodeBlockTitle(metastring) || titleProp;
  const { lineClassNames, code } = parseLines(children, {
    metastring,
    language,
    magicComments
  });
  const showLineNumbers =
    showLineNumbersProp ?? containsLineNumbers(metastring);
  return (
    <Container
      as="div"
      className={clsx(
        blockClassName,
        language &&
          !blockClassName.includes(`language-${language}`) &&
          `language-${language}`
      )}
    >
      <CodeBlockTitle title={title} link={link} toggle={toggle} />
      <div className="relative round-bold">
        <Highlight theme={prismTheme} code={code} language={language ?? 'text'}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => {
            style = {
              ...style,
              maxHeight
            };
            return (
              <pre
                /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
                tabIndex={0}
                ref={wordWrap.codeBlockRef}
                className={clsx(className, 'round-bold', 'thin-scrollbar')}
                style={style}
              >
                <code
                  className={
                    clsx()
                    // styles.codeBlockLines,
                    // showLineNumbers && styles.codeBlockLinesWithNumbering,
                  }
                >
                  {tokens.map((line, i) => (
                    <Line
                      key={i}
                      line={line}
                      getLineProps={getLineProps}
                      getTokenProps={getTokenProps}
                      classNames={lineClassNames[i]}
                      showLineNumbers={showLineNumbers}
                    />
                  ))}
                </code>
              </pre>
            );
          }}
        </Highlight>
        <div
          className="absolute z1 top right color-white flex"
          style={{
            marginTop: 11,
            marginRight: 11,
            opacity: 0,
            transition: 'opacity 200ms ease-in-out'
          }}
        >
          {addonButtons}
          {(wordWrap.isEnabled || wordWrap.isCodeScrollable) && (
            <WordWrapButton
              className=""
              onClick={() => wordWrap.toggle()}
              isEnabled={wordWrap.isEnabled}
            />
          )}
          <CopyButton onCopy={onCopy} text={code} />
        </div>
      </div>
    </Container>
  );
}
