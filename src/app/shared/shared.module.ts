import { ComponentRef, NgModule } from '@angular/core';
import { IntToArrayPipe } from './pipes/int-to-array.pipe';
import { CardComponent } from './components/card/card.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { CommonModule } from '@angular/common';

const components = [IntToArrayPipe, CardComponent, SeparatorComponent];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule],
})
export class SharedModule {}
