import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Paginas/Login";
import Cadastro from "./Paginas/Cadastro";
import Principal from "./Paginas/Principal";

const Rotas = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/principal" element={<Principal />} />
        </Routes> 
    </BrowserRouter>
    );
}

export default Rotas;