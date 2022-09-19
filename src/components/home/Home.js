import { Header } from "../header/Header";
import { Link, useNavigate } from "react-router-dom"
import{IoLogIn,IoPencil,IoCard,IoWifi} from "react-icons/io5"
import { Containerhome } from "./ContainerHome";

export function Home(){
    return(
        <>
        <Header reference="Minhas senhas"/>
        <Containerhome>
            <Link to="/credentials">
                <section className="typePass">
                    <IoLogIn/>
                    <h1>Credenciais</h1>
                </section>
            </Link>

            <Link to="/notes">
                <section className="typePass">
                    <IoPencil/>
                    <h1>Notas seguras</h1>
                </section>
            </Link>

            <Link to="/cards">
                <section className="typePass">
                    <IoCard/>
                    <h1>Cartões</h1>
                </section>
            </Link>

            <Link className="wifi" to="/wifi">
                <section className="typePass">
                    <IoWifi/>
                    <h1>Senhas de wifi</h1>
                </section>
            </Link>

            <Link to="/insert">
                <div className="insert">+</div>
            </Link>

        </Containerhome>
        </>
    )
}

