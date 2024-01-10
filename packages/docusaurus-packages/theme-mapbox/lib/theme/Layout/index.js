/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useEffect } from 'react';
import clsx from 'clsx';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import {
  PageMetadata,
  SkipToContentFallbackId,
  ThemeClassNames
} from '@docusaurus/theme-common';
import { useKeyboardNavigation } from '@docusaurus/theme-common/internal';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProvider from '@theme/Layout/Provider';
import ErrorPageContent from '@theme/ErrorPageContent';
import styles from './styles.module.css';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { PageHelmet } from '@theme/PageHelmet';

export default function Layout(props) {
  const { children, noFooter, wrapperClassName, title, description } = props;

  useKeyboardNavigation();

  const isBrowser = useIsBrowser();

  if (isBrowser) {
    import(
      /* webpackChunkName: "assembly-js" */ '@mapbox/mbx-assembly-docs/dist/assembly.js'
    );
  }

  let lastUrl;

  const initialize = () => {
    MapboxPageShell.initialize();

    MapboxPageShell.afterUserCheck(() => {
      MapboxPageShell.loadUserMenu();
    });
  };

  // from react-page-shell, mount and unmount actions
  useEffect(() => {
    if (isBrowser) {
      if (!window.MapboxPageShell)
        throw new Error('MapboxPageShell not loaded');

      initialize();
    }

    return () => {
      MapboxPageShell.removeNavigation();
    };
  }, []);

  useEffect(() => {
    const currentUrl = window.location.href;
    if (currentUrl === lastUrl) return;
    lastUrl = currentUrl;
    initialize();
  }, [isBrowser && window.location.href]);

  return (
    <LayoutProvider>
      <div id="page-shell">
        <div
          className="flex flex--column"
          style={{
            minHeight: '100vh'
          }}
        >
          <div className="=flex-child-grow flex-child-no-shrink">
            {/* Page level MetaData is loaded in DocItem 
            Page Helmet contains global meta  */}
            <PageHelmet />
            <SkipToContent />

            <AnnouncementBar />

            <Navbar />

            <div
              id={SkipToContentFallbackId}
              className={clsx(
                'flex-child-grow relative z0 block',
                ThemeClassNames.wrapper.main,
                styles.mainWrapper,
                wrapperClassName
              )}
            >
              <ErrorBoundary
                fallback={(params) => <ErrorPageContent {...params} />}
              >
                {children}
              </ErrorBoundary>
            </div>
          </div>
          {!noFooter && (
            <div className="flex-child-no-shrink shell-wrapper">
              <Footer />
            </div>
          )}
        </div>
      </div>
    </LayoutProvider>
  );
}
