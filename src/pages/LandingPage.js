import logo from '../logo.png';
import { Button } from 'antd';
import './LandingPage.css';
import Header from '../components/header';

function LandingPage () {
    return (
        <div className="landing">
            <Header></Header>
            <div className='info-container'>
                <div className="logo">
                    <img src={logo} alt="Logo de la empresa" />
                </div>
                <div className='text-container'>
                    <h1 className="title">Bienvenido a nuestra página</h1>
                    <p className="description">
                        Querido usuario, a continuación encontrarás dos botones con los cuales puedes votar por tu comida favorita, puedes enviar tantos votos como quieras.
                    </p>
                </div>
            </div>
            <div className="button-container">
                <Button size="large">Pizza</Button>
                <Button size="large">Hamburguesa</Button>
            </div>
        </div>
    );
};

export default LandingPage;