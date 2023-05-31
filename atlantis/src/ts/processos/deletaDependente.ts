import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Impressor from "../interfaces/impressor";
import ImpressorDependente from "../impressores/impressorDependente";

export default class DeletaDependente extends Processo {
  private cliente: Cliente[];
  private impressor!: Impressor
  constructor() {
    super();
    this.cliente = Armazem.InstanciaUnica.Clientes;
  }

  processar(): void {
    if (this.cliente.length == 0) {
      console.clear()
      console.log("Não há dependentes no momento!");
    } else {
      let titular = this.entrada.receberTexto(`Qual o CPF do titular?`);
        console.log("Iniciando a listagem dos clientes dependentes...");
        
        this.cliente.map((clienteMap) => {
          clienteMap.Documentos.filter((docFilter) => {

            if (docFilter.Numero === titular) {
              clienteMap.Dependentes.forEach((dependentes) => {
                this.impressor = new ImpressorDependente(dependentes);
                console.log(this.impressor.imprimir());
                
              });
            }
            
          });
        });
      this.cliente.forEach((dependentesForEach) => {
        dependentesForEach.Documentos.forEach((docsForEach) => {
          let numeroCpf = this.entrada.receberTexto("\nQual o número do CPF do dependente a deletar? ");
          if (numeroCpf === docsForEach.Numero && TipoDocumento.CPF === docsForEach.Tipo) {
            let index = this.cliente.indexOf(dependentesForEach);
            this.cliente.splice(index, 1);
            console.clear()
            console.log("Dependente deletado com sucesso!")
          } else {
            console.log('Opção não entendida :(')
          }
        });
      });
    }
  }
}
