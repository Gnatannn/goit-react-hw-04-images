import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { PropTypes } from 'prop-types';
import { ImageGalleryEl } from './ImageGallery.styled';

export const ImageGallery = ({ items }) => {
  return (
    <ImageGalleryEl>
      {items.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </ImageGalleryEl>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
