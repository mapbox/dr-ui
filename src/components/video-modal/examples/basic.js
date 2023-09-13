/*
Basic.
*/
import React, { useState } from 'react';
import VideoModal from '../index.js';
import Button from '@mapbox/mr-ui/button';

export default function Example() {
  const [modal, setModal] = useState(false);

  const openModal = function () {
    setModal(true);
  };

  const closeModal = function () {
    setModal(false);
  };

  const renderModal = () => {
    return <VideoModal youtubeId="Ldw3mFGyjDE" closeModal={closeModal} />;
  };

  return (
    <>
      <Button
        size="medium"
        onClick={openModal}
        passthroughProps={{ 'aria-label': 'Show modal' }}
      >
        Show modal
      </Button>
      {modal && renderModal()}
    </>
  );
}
