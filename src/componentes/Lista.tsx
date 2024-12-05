import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';
import api from '../servicos/api';
import { Banco } from '../tipos/Banco';
import Paginacao from './Paginacao'; // Importa a componente de paginação

const Lista: React.FC = () => {
  const [bancos, setBancos] = useState<Banco[]>([]);
  const [pagination, setPagination] = useState({ totalPages: 1, pageNumber: 0 });

  const fetchBancos = async (pageNumber = 0) => {
    try {
      const response = await api.get(`/?PageSize=10&PageNumber=${pageNumber}`);
      console.log('Resposta da API:', response.data); // Debug
      setBancos(response.data.result || []);
      setPagination({
        totalPages: response.data.pagination.totalPages,
        pageNumber: response.data.pagination.pageNumber,
      });
    } catch (error) {
      console.error('Erro ao buscar bancos:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/banck-account?Id=${id}`);
      fetchBancos();
    } catch (error) {
      console.error('Erro ao deletar banco:', error);
    }
  };

  const handlePageChange = (page: number) => {
    fetchBancos(page);
<<<<<<< Updated upstream
  };
=======
  }; 
>>>>>>> Stashed changes

  useEffect(() => {
    fetchBancos();
  }, []);

  return (
    <div className="lista-container">
      <h1>Gerenciamento de Tarefas</h1>
      <Button component={Link} to="/create" variant="contained" color="primary">
        Adicionar Banco
      </Button>
      <Table>
        <TableHead >
          <TableRow >
            <TableCell>Name</TableCell>
            <TableCell>Account</TableCell>
            <TableCell>Branch</TableCell>
            <TableCell>Balance</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(bancos) && bancos.map((banco) => (
            <TableRow key={banco.id}>
              <TableCell>{banco.name}</TableCell>
              <TableCell>{banco.account}</TableCell>
              <TableCell>{banco.branch}</TableCell>
              <TableCell>{banco.balance}</TableCell>
              <TableCell>
                <Button component={Link} to={`/edit/${banco.id}`} color="primary">
                  Editar
                </Button>
                <Button onClick={() => handleDelete(banco.id!)} color="secondary">
                  Excluir
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Componente de paginação */}
      <Paginacao
        currentPage={pagination.pageNumber}
        totalPages={pagination.totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Lista;

