import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

// This is a NestJS module for managing user authentication. Below is the AuthModule class,
// Identify and correct the issue with this module setup

@Module({
  providers: [AuthService],
})
export class AuthModule {}