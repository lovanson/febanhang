import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [CommonModule, ContactUsRoutingModule, SharedModule, LeafletModule],
})
export class ContactUsModule {}
