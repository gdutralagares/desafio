import React from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../servicos/api';
import { Banco } from '../tipos/Banco';
import Formulario from '../componentes/Formulario';

const CriarBanco: React.FC = () => {
  const navigate = useNavigate();

  const handleCreate = async (data: Banco) => {
    try {
      await api.post('/banck-account', data); 
      navigate('/');
    } catch (error) {
      console.error('Erro ao criar banco:', error);
    }
  };

  return (
    <div className="formulario-container">
      <h1>Criar Banco</h1>
      <Formulario onSubmit={handleCreate} />
    </div>
  );
};

export default CriarBanco;
