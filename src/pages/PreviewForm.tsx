// src/pages/PreviewForm.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import type { RootState } from '../redux/store';
import { Container, Typography } from '@mui/material';
import FormRenderer from '../components/FormRenderer';

const PreviewForm = () => {
  const { formId } = useParams();
  const forms = useSelector((state: RootState) => state.forms);

  // Determine which form to preview. We need to ensure the object
  // has all the properties of FormConfig, even for the currentForm.
  const formToRender = formId
    ? forms.savedForms.find((form) => form.id === formId)
    : {
        // We'll create a temporary FormConfig object from the currentForm state.
        id: 'current-form-preview', // Assign a placeholder ID for the current form.
        name: forms.currentForm.name || 'Preview Form',
        createdAt: new Date().toISOString(),
        fields: forms.currentForm.fields,
      };

  // Handle the case where no form is found
  if (!formToRender || (formId && !formToRender.fields.length)) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5">
          Form not found or is empty. Please create a form first.
        </Typography>
      </Container>
    );
  }

  // The formToRender variable is now guaranteed to match the FormConfig type,
  // so it can be safely passed to the FormRenderer.
  return <FormRenderer form={formToRender} />;
};

export default PreviewForm;
