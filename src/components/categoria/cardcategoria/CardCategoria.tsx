import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

// Criar a Interface da Props
interface CardCategoriaProps {  
  categoria: Categoria;
}

// Passamos a interface como parametro da função - como a props -
function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-slate-800 text-white font-bold text-2xl">
        Categoria
      </header>

      {/* 
            Passando o que desejamos recebar da props -
            */}
      <p className="p-8 text-3xl bg-slate-200 h-full">{categoria.tipo}</p>

      <div className="flex">
        {/* 
                    Envolvemos os Botões Editar e Deletar com o Componente Link e adicionamos 
                    as rotas para os respectivos componentes. 
                   
                */}
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-slate-100 bg-teal-500 hover:bg-slate-500 
                        flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
