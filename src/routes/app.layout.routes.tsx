import * as React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from '../components/layout';
import Vendas from '../pages/Vendas';
import Pedidos from '../pages/Vendas/pedidos';
import Clientes from '../pages/Vendas/cliente';
import Produtos from '../pages/Vendas/produtos';

function RoutesLayout() {
    return (
      <Layout>
          <Routes>
              <Route path="/" element={<Vendas/>}/>
              <Route path="/pedidos" element={<Pedidos/>}/>
              <Route path="/clientes" element={<Clientes/>}/>
              <Route path="/produtos" element={<Produtos/>}/>
          </Routes>
      </Layout> 
    );
  }

export default RoutesLayout;