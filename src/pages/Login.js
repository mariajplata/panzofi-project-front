import { Input } from "antd";
import { Button } from 'antd';
import { UserOutlined } from "@ant-design/icons";
import Header from '../components/header';

function Login () {
    return (
        <div className="login">
            <Header></Header>
            <h1>Bienvenido</h1>
            <Input size="large" placeholder="Usuario" prefix={<UserOutlined />} />
            <Input.Password size="large" placeholder="Contraseña" />
            <Button size="large">Iniciar sesión</Button>
        </div>
    );
};

export default Login;