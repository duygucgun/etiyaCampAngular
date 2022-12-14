import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { AuthModule } from './auth/auth.module';
import { StorageModule } from './storage/storage.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { IfNotDirective } from './directive/ifNot/if-not.directive';
import { ErrorHandlingInterceptor } from './interceptors/error-handling.interceptor';


@NgModule({
  declarations: [    
    IfNotDirective,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AuthModule,
    StorageModule
  ],
  exports:[
    IfNotDirective,
  ],
  providers:[
    {provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi:true}
  ]
})
export class CoreModule { }