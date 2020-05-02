import React, { FunctionComponent, useState } from 'react';
import { remove, useImageSources } from '../../slices/images';
import {
  Button,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/RemoveCircle';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import ContentLoader from 'react-content-loader';
import { useDispatch } from 'react-redux';

const TileButton = styled(ButtonBase)`
  width: 100%;
  height: 100%;
`;

const TileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PreviewImage = styled.img`
  width: 100%;
  object-fit: contain;
`;

const PlaceholderContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Placeholder = () => (
  <PlaceholderContainer>
    <ContentLoader
      speed={4}
      width="100%"
      height={250}
      viewBox="0 0 400 250"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" width="100%" height="250" />
    </ContentLoader>
  </PlaceholderContainer>
);

export const ImageList: FunctionComponent = () => {
  const imageSources = useImageSources();
  const dispatch = useDispatch();
  const [selectedSrc, setSelectedSrc] = useState<string | null>('');

  return (
    <>
      <GridList cellHeight={250} cols={5}>
        {imageSources.map((src) => (
          <GridListTile key={src}>
            <TileButton
              focusRipple
              onClick={() => {
                setSelectedSrc(src);
              }}
            >
              <LazyLoad
                height={250}
                placeholder={<Placeholder />}
                debounce={500}
              >
                <TileImage src={src} alt={src} />
              </LazyLoad>
              <GridListTileBar
                actionIcon={
                  <IconButton
                    aria-label={`remove ${src}`}
                    onClick={() => {
                      dispatch(remove(src));
                    }}
                  >
                    <RemoveIcon color="secondary" />
                  </IconButton>
                }
              />
            </TileButton>
          </GridListTile>
        ))}
      </GridList>
      <Dialog
        open={Boolean(selectedSrc)}
        onClose={() => {
          setSelectedSrc(null);
        }}
        fullWidth
      >
        <DialogContent>
          {selectedSrc && <PreviewImage src={selectedSrc} alt={selectedSrc} />}
        </DialogContent>
        <DialogActions>
          {selectedSrc && (
            <Button
              onClick={() => {
                dispatch(remove(selectedSrc));
                setSelectedSrc(null);
              }}
              color="secondary"
              variant="contained"
            >
              <RemoveIcon />
              Remove
            </Button>
          )}
          <Button
            onClick={() => {
              setSelectedSrc(null);
            }}
            color="default"
            variant="contained"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
