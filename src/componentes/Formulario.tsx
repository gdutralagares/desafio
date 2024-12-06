import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { Banco } from '../tipos/Banco';

interface FormularioProps {
  initialData?: Banco;
  onSubmit: (data: Banco) => void;
}

const Formulario: React.FC<FormularioProps> = ({ initialData, onSubmit }) => {
  const [banco, setBanco] = useState<Banco>(initialData || {
    name: '',
    account: 0,
    branch: 0,
    balance: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    const newValue =
      name === 'account' || name === 'branch' || name === 'balance'
        ? parseInt(value, 10) || 0 
        : value;
  
    setBanco((prevBanco) => ({
      ...prevBanco,
      [name]: newValue,
    }));
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(banco);
  };

  return (
    <form className="formulario-container"onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={banco.name}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Account"
        name="account"
        type="number"
        value={banco.account}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Branch"
        name="branch"
        type="number"
        value={banco.branch}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Balance"
        name="balance"
        type="number"
        value={banco.balance}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Salvar
      </Button>
    </form>
  );
};

export default Formulario;
