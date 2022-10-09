import { PropTypes } from 'prop-types';
import { Overlay, ModalEl } from 'components/Modal/Modal.styled';

export const Modal = ({ tags, largeImageURL, onBackdropClick }) => {
  return (
    <Overlay onClick={onBackdropClick}>
      <ModalEl>
        <img src={largeImageURL} alt={tags} />
      </ModalEl>
    </Overlay>
  );
};

Modal.propTypes = {
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onBackdropClick: PropTypes.func.isRequired,
};
