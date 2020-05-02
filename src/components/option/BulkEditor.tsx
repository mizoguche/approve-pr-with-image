import React, { FunctionComponent, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { storeBulk, useImageUrls } from '../../slices/images';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const Form = styled.form`
  padding: 16px;
`;

const Editor = styled(TextField)`
  height: 80%;
  margin-bottom: 16px;
`;

type Props = {
  onSave: () => void;
};

export const BulkEditor: FunctionComponent<Props> = ({ onSave }) => {
  const imageUrls = useImageUrls();
  const dispatch = useDispatch();
  const [urls, setUrls] = useState(imageUrls);

  return (
    <Form
      onSubmit={() => {
        dispatch(storeBulk(urls));
        onSave();
      }}
    >
      <Editor
        name="urls"
        value={urls}
        fullWidth
        multiline
        rows={20}
        onChange={(ev) => {
          setUrls(ev.target.value);
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </Form>
  );
};
