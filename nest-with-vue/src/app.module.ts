import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client/dist'), // New
      serveRoot: '/vue', // Specify a base path for this folder
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'quasarclient/dist/spa'), // New
      serveRoot: '/quasar', // Specify a base path for this folder
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
