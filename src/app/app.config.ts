// src/app.config.ts
import { importProvidersFrom } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter(routes, withDebugTracing()),  // opcional: tracing ajuda no debug
  ]
};
