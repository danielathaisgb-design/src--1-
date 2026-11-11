import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Product } from './pages/product/product';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {path: '', component:Home},             // Ruta Raiz
    {path: 'about', component:About},       // Ruta About
    {path: 'product', component:Product},   // Ruta de Product
    {path: 'contact', component:Contact},   // Ruta de Contact
    {path: '**', redirectTo: ''}            // Redirigir a la Ruta Raiz
];
