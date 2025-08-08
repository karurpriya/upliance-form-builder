// src/components/FieldConfigurator.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  TextField,
  FormControlLabel,
  Switch,
  IconButton,
  Paper,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import type { Field } from '../types';
import { updateField, deleteField } from '../redux/formSlice';

interface FieldConfiguratorProps {
  field: Field;
}

const FieldConfigurator: React.FC<FieldConfiguratorProps> = ({ field }) => {
  const dispatch = useDispatch();

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateField({
        ...field,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleToggleRequired = () => {
    dispatch(
      updateField({
        ...field,
        required: !field.required,
      })
    );
  };

  const handleDelete = () => {
    dispatch(deleteField(field.id));
  };

  return (
    <Paper elevation={2} sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
      <TextField
        fullWidth
        label="Field Label"
        name="label"
        value={field.label}
        onChange={handleUpdate}
      />
      <FormControlLabel
        control={
          <Switch checked={field.required} onChange={handleToggleRequired} />
        }
        label="Required"
      />
      <IconButton aria-label="delete" onClick={handleDelete} color="error">
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
};

export default FieldConfigurator;