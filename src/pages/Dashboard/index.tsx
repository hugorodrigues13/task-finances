
import { Layout, Menu, MenuProps } from 'antd';
import React, {ReactNode, useEffect, useState } from 'react';
import { Container } from './styles';
import ContentProps from '../Vendas';
import Logo from '../../@types/assets/logoDashboard.png'
import Logo2 from '../../@types/assets/semfundo.png';
import { Link } from 'react-router-dom';
import { Bank, House, Tag, TextIndent, TextOutdent, UsersFour } from 'phosphor-react';
const { Header, Sider, Content } = Layout;


type MenuItem = Required<MenuProps>['items'][number];

interface BaseLayoutProps {
  children?: ReactNode;
}

const Home: React.FC<BaseLayoutProps> = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }



  const items: MenuItem[] = [
    
    getItem(<Link to="/">Painel</Link>,'1', <House size={22}/>),
    getItem('Vendas', 'sub1', <Tag size={22}/>, [
      getItem(<Link to="/novoPedido">Novo pedido</Link>, '3'),
      getItem(<Link to="/clientes">Clientes</Link>, '4'),
      getItem(<Link to="/pedidos">Pedidos</Link>, '5'),
    ]),
    getItem('Financeiro', 'sub2', <Bank size={22}/>, [
      getItem('Contas a pagar', '6'), 
      getItem('Contas a receber', '7'),
    ]),
    getItem('Departamento', '9', <UsersFour size={22}/>, [
      getItem('Usuários cadastrados', '10'),
      getItem('Cadastrar usuário', '11'),
    ]),
  ];


  return (
    <>
    
    <Container>
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        
      {collapsed === true ? <div className="div-logo-mini" > <img src={Logo2} alt="" className='logo-dash-mini'/> </div> : <div className="div-logo" > <img src={Logo} alt="" className='logo-dash-principal'/> </div>} 
        <Menu
          className='menu-theme'
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />

      </Sider>
      <Layout className="site-layout">
        <Header
          className='sider'
          style={{
            padding: 0,
            color: '#fff',
            alignItems: 'center',
            fontSize: '20px'
          }}>
          {React.createElement(collapsed ? TextIndent : TextOutdent, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            height: '88.6vh',
            margin: '24px 16px',
            padding: 24,
          }}>
              {children}
        </Content>
      </Layout>
    </Layout>

    </Container>
    </>
  );
}

export default Home;
