import React, { useState } from 'react';
import { Button, Row, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ArchiveBox, Eye, NotePencil, Printer, Trash } from 'phosphor-react';
import {Container} from './styles'

interface DataType {
  key: React.Key;
  date_emissao: string;
  pedido: string;
  valor: number;
  cliente: string;
  situacao: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Data de emissão',
    dataIndex: 'date_emissao',
  },
  {
    title: 'Nº do pedido',
    dataIndex: 'pedido',
  },
 
  {
    title: 'Cliente',
    dataIndex: 'cliente',
  },
  {
    title: 'Valor',
    dataIndex: 'valor',
  },
  {
    title: 'Situação',
    dataIndex: 'situacao',
  },
];

const data: DataType[] = [];
for (let i = 0; i < 2; i++) {
  data.push({
    key: i,
    date_emissao: `22/22/22`,
    cliente: `Edward King ${i}`,
    valor: 32,
    pedido: `London, Park Lane no. ${i}`,
    situacao: "Paga"
  });
}

const Tabela: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <Container>
      <div className="ant-table-div" style={{ marginBottom: 16 }}>
        
        <Button className='btn-icons-table-visualizar'>
        <Eye size={28} />
        </Button>
        <Button className='btn-icons-table-imprimir'>
        <Printer size={28} />
        </Button>
        <Button className='btn-icons-table-baixar'>
        <ArchiveBox size={28} />
        </Button>
        <Button className='btn-icons-table-editar'>
        <NotePencil size={28} />
        </Button>
        <Button className='btn-icons-table-deletar'>
        <Trash size={28}/>
        </Button>
       
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      <Row className='selected-items' gutter={24}>
          <span>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </Row>
    </Container>
  );
};

export default Tabela;