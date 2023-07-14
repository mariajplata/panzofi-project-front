import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import './header.css'

function Header () {
    return (
        <div className="header"> 
            <div className="logout-container">
                <span>
                    <LogoutOutlined />
                </span>
                <Button size="large">Cerrar sesión</Button>
            </div>
        </div>
    );
};

export default Header;