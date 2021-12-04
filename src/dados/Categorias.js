export default class Categorias{
    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    desiscrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    notificar(){
        this._inscritos.forEach(func =>{
            func(this.categorias);
        } );
    }
    adicionarCategoria(novaCaegoria){
        this.categorias.push(novaCaegoria);
        this.notificar(this.categorias)
    }
}