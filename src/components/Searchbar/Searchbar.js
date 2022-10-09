import { PropTypes } from 'prop-types';
import { Formik } from 'formik';
import {
  SearchBar,
  SearchForm,
  SubmitButton,
  SubmitButtonLabel,
  SearchInput,
} from 'components/Searchbar/Searchbar.styled';
import { AiOutlineSearch as SearchIcon } from 'react-icons/ai';

export const Searchbar = ({ onSubmitDetails }) => {
  const handleSubmit = (values, actions) => {
    onSubmitDetails(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <SearchBar>
      <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <SearchForm>
            <SubmitButton type="submit" disable={isSubmitting}>
              <SubmitButtonLabel arial-label="Search">
                <SearchIcon />
              </SubmitButtonLabel>
            </SubmitButton>
            <SearchInput
              name="searchQuery"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        )}
      </Formik>
    </SearchBar>
  );
};

Searchbar.propTypes = {
  onSubmitDetails: PropTypes.func.isRequired,
};
