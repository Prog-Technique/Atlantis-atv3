import Processo from "../../abstracoes/processo";
import MenuTipoListagemClientes from "../../menus/menuTipoListagemClientes";
import ListagemTitulares from "../Listagem/listagemTitulares";
import ListagemDependentesTitular from "../Listagem/listagemDependentesTitular";
import ListagemDependentes from "../Listagem/listagemDependentes";
import ListagemTitularDependente from "../Listagem/listagemTitularDependente";

export default class TipoListagemClientes extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoListagemClientes()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ListagemTitulares()
                this.processo.processar()
                break;
            case 2:
                this.processo = new ListagemDependentesTitular()
                this.processo.processar()
                break;
            case 3:
                this.processo = new ListagemDependentes()
                this.processo.processar()
                break;
            case 4:
                this.processo = new ListagemTitularDependente()
                this.processo.processar()
                break;
            default:
                console.log('Opção não entendida... :(')
        }
    }
}