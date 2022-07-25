export abstract class View<T> {
	protected elemento: HTMLElement;
	private escapar = false;

	constructor(seletor: string) {
		const elemento = document.querySelector(seletor);
		if(elemento) {
			this.elemento = elemento as HTMLElement;
		} else {
			throw Error(`Seletor${seletor} não existe no DOM. Verifique!`)
		}

		if (this.escapar) {
			this.escapar = this.escapar;
		}
	}

	public update(model: T): void {
		const template = this.template(model);
		this.elemento.innerHTML = template
	}

	protected abstract template(model: T): string;
}