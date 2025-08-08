// src/pages/CreateForm.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { addField } from '../redux/formSlice';
import { Button, Container, Box, Typography, Grid } from '@mui/material';
import FieldConfigurator from '../components/FieldConfigurator';
import { v4 as uuidv4 } from 'uuid';

const CreateForm = () => {
  const dispatch = useDispatch();
  const fields = useSelector((state: RootState) => state.forms.currentForm.fields);

  const handleAddField = (type: 'text' | 'number') => {
    const newField = {
      id: uuidv4(),
      label: 'New ' + type + ' field',
      type: type,
      required: false,
      validations: [],
    };
    dispatch(addField(newField));
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Create New Form
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Button
          variant="contained"
          onClick={() => handleAddField('text')}
          sx={{ mr: 2 }}
        >
          Add Text Field
        </Button>
        <Button
          variant="contained"
          onClick={() => handleAddField('number')}
          sx={{ mr: 2 }}
        >
          Add Number Field
        </Button>
      </Box>
      <Grid container spacing={2} component="div">
    {fields.map((field) => (
      <Grid item xs={12} key={field.id} component="div">
        <FieldConfigurator field={field} />
      </Grid>
    ))}
  </Grid>
    </Container>
  );
};

export default CreateForm;