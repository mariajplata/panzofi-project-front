import { Button } from 'antd';
import './header.css'

function Header () {
    return (
        <div className="header"> 
            <div className="logout-container">
                <Button size="large">Cerrar sesión</Button>
            </div>
        </div>
    );
};

export default Header;