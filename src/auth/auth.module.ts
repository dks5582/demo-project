import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';

export const JwtSecret = 'zjP9h6ZI5LoSKCRj';

@Module({
  imports:
    [
        PrismaModule,
        PassportModule,
        JwtModule.register({
            secret: JwtSecret,
            signOptions: {expiresIn: '20m'}
        }),
    ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
