import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee/employee.module';

// Added this part for dotenv
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [

    // Added this part for dotenv and connection to mongoose database url
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),

    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
