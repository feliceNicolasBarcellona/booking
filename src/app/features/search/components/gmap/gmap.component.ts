import { Component, Input } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-gmap',
  template: `
    <img
      src="https://www.mapquestapi.com/staticmap/v5/map?center={{
        active?.location.address
      }}&size=500,200&key=Go3ZWai1i4nd2o7kBuAUs4y7pnpjXdZn"
      width="100%"
      height="200"
    />
    <div class="address">
      <div class="font-big">{{ active?.name }}</div>
      <div class="font-small">{{ active?.location?.address }}</div>
    </div>
  `,
  styles: [],
})
export class GmapComponent {
  @Input() active: Hotel | undefined
}
