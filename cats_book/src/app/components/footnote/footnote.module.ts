import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootnoteComponent } from './footnote.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FootnoteComponent],
  imports: [CommonModule, RouterModule],
  exports: [FootnoteComponent],
})
export class FootnoteModule {}
