/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { translate } from '@docusaurus/Translate';
import { useBackToTopButton } from '@docusaurus/theme-common/internal';
import Tooltip from '@mapbox/mr-ui/tooltip';
import Icon from '@mapbox/mr-ui/icon';

export default function BackToTopButton() {
  const { shown, scrollToTop } = useBackToTopButton({ threshold: 300 });
  const getPopoverContent = <div className="txt-s">Back to top!</div>;
  return (
    <div className="mx24 my24 z5">
      <Tooltip content={getPopoverContent}>
        <button
          aria-label={translate({
            id: 'theme.BackToTopButton.buttonAriaLabel',
            message: 'Scroll back to top',
            description: 'The ARIA label for the back to top button'
          })}
          className="btn btn--blue w60 h60 round-full shadow-darken25 flex flex--center-main flex--center-cross"
          type="button"
          onClick={scrollToTop}
        >
          <Icon name="arrow-up" size={30} />
        </button>
      </Tooltip>
    </div>
  );
}
