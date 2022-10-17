import { useState, useEffect } from 'react';
import * as API from 'api/getimages';
import { Container, ErrorInfo, Info } from 'components/App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export const App = () => {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchImg() {
      if (query === '') {
        return;
      }
      try {
        setIsLoading(true);
        const fetchedImg = await API.getImages(query, page);
        if (page === 1) {
          setTotal(fetchedImg.total);
          setImages([...fetchedImg.hits]);
          setIsLoading(false);
        } else {
          setImages(images => [...images, ...fetchedImg.hits]);
          setIsLoading(false);
        }
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    }
    fetchImg();
  }, [query, page]);

  const onLoadMore = () => {
    setPage(page + 1);
    setIsLoading(true);
  };

  const handleSubmitForm = values => {
    setQuery(values.searchQuery);
    setPage(1);
  };

  return (
    <Container>
      <Searchbar onSubmitDetails={handleSubmitForm} />
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
            <Button onLoadMore={onLoadMore} />
          )}
          {isLoading && <Loader>Loading</Loader>}
          {images.length === total && !!images.length && (
            <Info>No more pictures for your query</Info>
          )}
        </>
      )}
    </Container>
  );
};
