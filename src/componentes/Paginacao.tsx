import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

interface PaginacaoProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Paginacao: React.FC<PaginacaoProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handleChange = (_: any, page: number) => {
    onPageChange(page - 1);
  };

  return <MuiPagination count={totalPages} page={currentPage + 1} onChange={handleChange} />;
};

export default Paginacao;