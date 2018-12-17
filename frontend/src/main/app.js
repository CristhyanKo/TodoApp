import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'
import 'antd/dist/antd.css'

import React from 'react'
import Menu from '../template/menu';
import Routes from './routes'
import { Layout } from 'antd';

const { Header, Content, Sider } = Layout;

export default props => (
    <Layout>
        <Menu />
        <Content style={{padding: '20px'}}>
            <Routes />
        </Content>
    </Layout>
)