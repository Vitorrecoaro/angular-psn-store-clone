import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealsComponent } from './deals.component';

@NgModule({
	declarations: [DealsComponent],
	exports: [DealsComponent],
	imports: [CommonModule],
})
export class DealsModule {}
