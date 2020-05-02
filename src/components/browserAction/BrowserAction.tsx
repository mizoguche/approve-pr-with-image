import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { get, useRandomImageSrc } from '../../slices/images';
import { useDidMount } from 'beautiful-react-hooks';
import { store } from '../../slices';
import { Provider, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Snackbar } from '@material-ui/core';

const HiddenInput = styled.input`
  position: absolute;
  margin-left: -9999px;
`;

const PreviewImage = styled.img`
  width: 400px;
  height: 300px;
  object-fit: contain;
`;

const BrowserAction: FunctionComponent = () => {
  const randomSrc = useRandomImageSrc();
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [src, setSrc] = useState<string | undefined>(undefined);
  const [copied, setCopied] = useState(false);

  useDidMount(() => {
    dispatch(get());
  });

  const input = inputRef.current;
  useEffect(() => {
    if (!src && randomSrc) {
      setSrc(randomSrc);
      return;
    } else if (src && !copied && input) {
      const markdown = `[![LGTM](${src})](${src})`;
      input.value = markdown;
      input.select();
      document.execCommand('Copy');
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs: any) => {
        const tabId: number = tabs[0].id;
        chrome.tabs.sendMessage(tabId, markdown, () => {});
      });
      setCopied(true);
    }
  }, [src, copied, input]);

  return (
    <>
      <HiddenInput
        ref={(ref) => {
          inputRef.current = ref;
        }}
      />
      <PreviewImage src={src} alt="" />
      <Snackbar
        open={copied}
        autoHideDuration={6000}
        message="Copied markdown text to clipboard."
      />
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserAction />
  </Provider>,
  document.getElementById('root'),
);
