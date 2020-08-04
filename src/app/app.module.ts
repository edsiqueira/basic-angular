import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatListModule } from '@angular/material/list'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatProgressBarModule } from '@angular/material/progress-bar'; 



import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './tabs/input/input.component';
import { FormsModule } from '@angular/forms';
import { EventComponent } from './tabs/event/event.component';
import { ChildItemComponent } from './tabs/event/child-item/child-item.component';
import { ClientListComponent } from './tabs/client-list/client-list.component';
import { ClientComponent } from './tabs/client-list/client/client.component';
import { TemplateVariableComponent } from './tabs/template-variable/template-variable.component';
import { TimerComponent } from './tabs/template-variable/timer/timer.component';
import { OnChangesComponent } from './tabs/on-changes/on-changes.component';
import { NameChangesComponent } from './tabs/on-changes/name-changes/name-changes.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    InputComponent,
    EventComponent,
    ChildItemComponent,
    ClientListComponent,
    ClientComponent,
    TemplateVariableComponent,
    TimerComponent,
    OnChangesComponent,
    NameChangesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
