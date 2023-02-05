import * as React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from '../components/layout';
import Vendas from '../pages/Vendas';
import CadastrarPedido from '../pages/Vendas/pedidos';
import Clientes from '../pages/Vendas/cliente';
import Pedidos from '../pages/Vendas/produtos';

function RoutesLayout() {
    return (
      <Layout>
          <Routes>
              <Route path="/" element={<Vendas/>}/>
              <Route path="/novoPedido" element={<CadastrarPedido/>}/>
              <Route path="/clientes" element={<Clientes/>}/>
              <Route path="/pedidos" element={<Pedidos/>}/>
          </Routes>
      </Layout> 
    );
  }

export default RoutesLayout;