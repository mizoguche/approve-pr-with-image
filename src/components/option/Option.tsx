import React, { FunctionComponent, useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch } from 'react-redux';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { store } from '../../slices';
import { useDidMount } from 'beautiful-react-hooks';
import { get } from '../../slices/images';
import { ImageList } from './ImageList';
import { BulkEditor } from './BulkEditor';

const Option: FunctionComponent = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const dispatch = useDispatch();

  useDidMount(() => {
    dispatch(get());
  });

  return (
    <>
      <AppBar position="static">
        <Tabs value={tabIndex} onChange={(_, value) => setTabIndex(value)}>
          <Tab label="Images" />
          <Tab label="Bulk Edit" />
        </Tabs>
      </AppBar>
      {tabIndex === 0 && <ImageList />}
      {tabIndex === 1 && (
        <BulkEditor
          onSave={() => {
            setTabIndex(0);
          }}
        />
      )}
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Option />
  </Provider>,
  document.getElementById('root'),
);
