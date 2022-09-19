import { Header } from "../header/Header";
import { Link } from "react-router-dom";
import { Containerhome } from "../home/ContainerHome"

import{IoLogIn,IoPencil,IoCard,IoWifi} from "react-icons/io5"

export function Insert(){
    return(
        <>
        <Header reference="categorias"/>
        <Containerhome>
            <Link to="/insert/credentials">
                <section className="typePass">
                    <IoLogIn/>
                    <h1>Credenciais</h1>
                </section>
                <div className="circle"></div>
            </Link>

            <Link to="/insert/notes">
                <section className="typePass">
                    <IoPencil/>
                    <h1>Notas seguras</h1>
                </section>
                <div className="circle"></div>
            </Link>

            <Link to="/insert/cards">
                <section className="typePass">
                    <IoCard/>
                    <h1>Cartões</h1>
                </section>
                <div className="circle"></div>
            </Link>

            <Link to="/insert/wifi">
                <section className="typePass">
                    <IoWifi/>
                    <h1>Senhas de wifi</h1>
                </section>
                <div className="circle"></div>
            </Link>

            <Link to="/insert">
                <div className="insert">+</div>
            </Link>

        </Containerhome>
        </>
    )
}