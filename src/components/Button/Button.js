import { PropTypes } from 'prop-types';
import {
  LoadMoreButton,
  FlexWrapperButton,
} from 'components/Button/Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <FlexWrapperButton>
      <LoadMoreButton type="button" onClick={() => onLoadMore()}>
        Load more images
      </LoadMoreButton>
    </FlexWrapperButton>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
