/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import FooterLegalStrip from './FooterLegalStrip';
import FooterSocialMediaStrip from './FooterSocialMediaStrip';

function Footer() {
  return (
    <footer
      id="page-footer"
      className="bg-gray-faint flex flex--center-cross"
      data-swiftype-index="false"
      style={{ minHeight: 72 }}
    >
      <div className="wmax1800 w-11/12-mm w-11/12-ml mx-auto px24 px0-mm">
        <div
          id="page-footer-legal-social"
          className="txt-s color-gray py12 py0-ml flex flex--column flex--row-mm"
        >
          <FooterLegalStrip className="col mt12 flex-child-grow flex flex--wrap" />
          <FooterSocialMediaStrip className="col my12 align-r-mm flex-child-no-shrink" />
        </div>
      </div>
    </footer>
  );
}
export default React.memo(Footer);
