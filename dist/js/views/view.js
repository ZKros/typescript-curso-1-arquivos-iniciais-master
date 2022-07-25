export class View {
    constructor(seletor) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor${seletor} não existe no DOM. Verifique!`);
        }
        if (this.escapar) {
            this.escapar = this.escapar;
        }
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
