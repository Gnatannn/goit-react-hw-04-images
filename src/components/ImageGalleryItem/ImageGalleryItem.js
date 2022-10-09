import { PropTypes } from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import {
  ImageGalleryCard,
  ImageGalleryImage,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeClick);
  }

  onEscapeClick = e => {
    if (this.state.isModalOpen) {
      if (e.code === 'Escape') {
        this.toggleModal();
      }
    }
  };

  handleBackdropClick = e => {
    if (this.state.isModalOpen) {
      if (e.currentTarget === e.target) {
        this.toggleModal();
      }
    }
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { isModalOpen } = this.state;

    return (
      <ImageGalleryCard>
        <ImageGalleryImage
          src={webformatURL}
          alt={tags}
          onClick={this.toggleModal}
        />
        {isModalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            tags={tags}
            onBackdropClick={this.handleBackdropClick}
          />
        )}
      </ImageGalleryCard>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
