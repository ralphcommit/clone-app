import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { ServiceWorkerModule } from '@angular/service-worker';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
      HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
// This code sets up the main application module for an Ionic Angular app.
// It imports necessary modules such as BrowserModule, IonicModule, FormsModule, and AppRoutingModule.
// The FormsModule is specifically imported to enable the use of ngModel for two-way data binding
// in forms, which is essential for handling user input in components like login and registration pages.
// The AppComponent is declared as the main component of the application, and IonicModule is configured
// to use the root component for bootstrapping the app.
// This setup is crucial for building interactive and responsive mobile applications using Ionic and Angular.
// Additionally, Firebase is initialized in the AppModule using the environment configuration,
// allowing the app to use Firebase services such as authentication, firestore, and storage.
// The AngularFireModule.initializeApp function is used to initialize Firebase with the project's specific firebaseConfig,
// which is stored in the environment file for security and flexibility.
// This integration enables seamless backend communication and data management within the Ionic Angular app.
// Furthermore, AngularFireAuthModule is imported to enable Firebase Authentication in the app,
// allowing for user authentication and authorization using Firebase's authentication services.
// This module provides the necessary tools and services to implement secure authentication mechanisms,
// such as email/password login, social media login, and more, enhancing the app's user management capabilities.
// The inclusion of AngularFireAuthModule streamlines the process of integrating Firebase Authentication
// into the Ionic Angular app, providing a robust solution for handling user accounts and authentication flows.
// The code also includes imports for Firestore and Storage,
// allowing for database and file storage capabilities within the app.
// AngularFirestoreModule and AngularFireStorageModule are used to configure and initialize
// these Firebase services, making them available for injection and use in the app's components and services.
// This enables features like real-time data synchronization, offline data access, and cloud storage integration,
// further enhancing the app's functionality and performance.
// The modular API from AngularFire is used in this setup,
// which is a more recent and recommended approach for integrating Firebase with Angular applications.
// It provides a tree-shakable and more efficient way to use Firebase services,
// ensuring that only the used parts of Firebase are included in the final bundle,
// thus optimizing the app's performance and load times.
// The provideFirebaseApp, provideFirestore, and provideAuth functions are used to set up Firebase,
// Firestore, and Authentication services respectively, in a modular fashion.
// This change reflects the latest best practices for Angular and Firebase integration,
// promoting better performance and easier maintenance of the code.