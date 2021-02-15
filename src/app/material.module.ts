import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        MatIconModule,
        MatCardModule
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        MatIconModule,
        MatCardModule
    ]
})
export class MaterialModule{

}