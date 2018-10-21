import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BasicScrollComponent } from './basic-scroll/basic-scroll.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';
@NgModule({
  declarations: [AppComponent, BasicScrollComponent, InfiniteScrollComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBogpc-AUVgVdcgoiWhE4_lKCFzfcbaSaA',
      authDomain: 'angularfirebase-267db.firebaseapp.com',
      databaseURL: 'https://angularfirebase-267db.firebaseio.com',
      projectId: 'angularfirebase-267db'
    }),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
