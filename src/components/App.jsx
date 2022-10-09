import { Component } from 'react';
import * as API from 'api/getimages';
import { Container, ErrorInfo, Info } from 'components/App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: null,
    isLoading: false,
    error: false,
    page: 1,
    query: '',
    total: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.fetchImg(this.state.query, this.state.page);
    }
  }

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };

  handleSubmitForm = values => {
    this.setState({
      query: values.searchQuery,
      page: 1,
    });
  };

  fetchImg = async (query, page) => {
    try {
      this.setState({ isLoading: true });
      const fetchedImg = await API.getImages(query, page);
      if (page === 1) {
        this.setState(state => ({
          total: fetchedImg.total,
          images: [...fetchedImg.hits],
          isLoading: false,
        }));
      } else {
        this.setState(state => ({
          images: [...state.images, ...fetchedImg.hits],
          isLoading: false,
        }));
      }
    } catch (error) {
      this.setState({
        error: true,
        isLoading: false,
      });
    }
  };

  render() {
    const { error, images, isLoading, total } = this.state;
    return (
      <Container>
        <Searchbar onSubmitDetails={this.handleSubmitForm} />
        {isLoading && <Loader>Loading</Loader>}
        {error && <ErrorInfo>We got an error! Please try again</ErrorInfo>}
        {images && (
          <>
            {images.length === 0 && (
              <ErrorInfo> There is no picture on this query!</ErrorInfo>
            )}

            <ImageGallery items={images} />
            {isLoading && <Loader>Loading</Loader>}
            {images.length > 0 && images.length !== total && (
              <Button onLoadMore={this.onLoadMore} />
            )}
            {isLoading && <Loader>Loading</Loader>}
            {images.length === total && !!images.length && (
              <Info>No more pictures for your query</Info>
            )}
          </>
        )}
      </Container>
    );
  }
}
