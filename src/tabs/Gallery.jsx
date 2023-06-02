import { Component } from 'react';

import * as ImageService from 'service/image-service';
import {
  Button,
  SearchForm,
  Text,
  PhotosList,
  Loader,
  Modal,
} from 'components';
import { useState } from 'react';
import { useEffect } from 'react';

export const Gallery = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [showBtn, setShowBtn] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    ImageService.getImages(query, page)
      .then(({ photos, total_results }) => {
        if (!photos.length) {
          setIsEmpty(true);
          return;
        }
        setPhotos(prevState => [...prevState, ...photos]);
        setShowBtn(page < Math.ceil(total_results / 15));
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, query]);

  const onSubmit = newQuery => {
    if (query === newQuery) {
      return alert('Already shown');
    }
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
    setShowBtn(false);
    setIsEmpty(false);
    setError('');
  };
  const handleClick = () => {
    setPage(prevState => prevState + 1);
  };

  const showModal = largeImageURL => {
    setLargeImageURL(largeImageURL);
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {photos.length > 0 && (
        <PhotosList photos={photos} showModal={showModal} />
      )}
      {showBtn && <Button onClick={handleClick}>Load more...</Button>}
      {isEmpty && (
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      )}
      {error && <Text textAlign="center">Sorry. {error} ... 😭</Text>}
      {isLoading && <Loader />}
      {largeImageURL && (
        <Modal largeImageURL={largeImageURL} modalClose={showModal} />
      )}
    </>
  );
};
