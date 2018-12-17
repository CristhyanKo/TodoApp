import React from 'react'
import { Menu, Icon,Row, Col } from 'antd';

export default props => (
    <Row>
        <Col>
            <Menu mode="horizontal" >
                <Menu.Item>
                    <a href="#/todos"><Icon type="form" /> Atividades</a>
                </Menu.Item>
                <Menu.Item>
                    <a href="#/about"><Icon type="bulb" /> Sobre</a>
                </Menu.Item>
            </Menu>
        </Col>
    </Row>

)