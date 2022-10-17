import { PropTypes } from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { useState, useEffect } from 'react';
import {
  ImageGalleryCard,
  ImageGalleryImage,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscapeClick);
    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  });

  const onEscapeClick = e => {
    if (isModalOpen) {
      if (e.code === 'Escape') {
        toggleModal();
      }
    }
  };

  const handleBackdropClick = e => {
    if (isModalOpen) {
      if (e.currentTarget === e.target) {
        toggleModal();
      }
    }
  };

  return (
    <ImageGalleryCard>
      <ImageGalleryImage
        src={webformatURL}
        alt={tags}
        onClick={toggleModal}
        width="360"
      />
      {isModalOpen && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          onBackdropClick={handleBackdropClick}
        />
      )}
    </ImageGalleryCard>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
