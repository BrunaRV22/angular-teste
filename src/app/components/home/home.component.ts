import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    data: { usuario: string, senha: string };

    constructor() {
        this.data = {
            usuario: null,
            senha: null
        };
    }

    onSubmit(e: Event) {
        e.preventDefault();

        console.log('Form', this.data, e);
    }
}