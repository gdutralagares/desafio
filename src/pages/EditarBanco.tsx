import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../servicos/api';
import { Banco } from '../tipos/Banco';
import Formulario from '../componentes/Formulario';

const EditarBanco: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [banco, setBanco] = useState<Banco | null>(null);

  useEffect(() => {
    const fetchBanco = async () => {
      const response = await api.get(`/by-id?BankAccountId=${id}`);
      setBanco(response.data);
    };
    fetchBanco();
  }, [id]);

  const handleEdit = async (data: Banco) => {
    await api.put('/banck-account', { ...data, id });
    navigate('/');
  };

  return (
    <div className="formulario-container">
      <h1>Editar banco</h1>
      {banco && <Formulario initialData={banco} onSubmit={handleEdit} />}
    </div>
  ); 
};

export default EditarBanco;
