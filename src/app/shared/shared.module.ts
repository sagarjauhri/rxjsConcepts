import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
// REVIEW Is it can be allow to use RouterModule?
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HeaderComponent],
    imports: [FormsModule, ReactiveFormsModule, RouterModule],
    exports: [FormsModule, ReactiveFormsModule, HeaderComponent]
})
export class SharedModule {
    constructor() {}
}