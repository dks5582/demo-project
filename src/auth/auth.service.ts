import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService, private jwtService: JwtService) {}

    async login(email: string, password: string): Promise<AuthEntity> {
        const user = await this.prismaService.user.findUnique({where: {email: email}});

        if(!user){
            throw new NotFoundException(`No user found with email: '${email}'`);
        }

        const isPasswordValid = user.password === password;

        if(!isPasswordValid) {
            throw new UnauthorizedException('Invalid Password');
        }

        return {
            accessToken: this.jwtService.sign({userId: user.id}),
        };

    }
}
