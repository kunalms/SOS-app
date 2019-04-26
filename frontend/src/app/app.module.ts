import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UsersComponent} from './users/users.component';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule
} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessageDialogComponent} from './dialog/message-dialog/message-dialog.component';
import {HistoryComponent} from './history/history.component';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        MessageDialogComponent,
        HistoryComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTabsModule,
        FlexLayoutModule,
        HttpClientModule,
        MatCardModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatDialogModule,
        MatSnackBarModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [MessageDialogComponent]
})
export class AppModule {
}
