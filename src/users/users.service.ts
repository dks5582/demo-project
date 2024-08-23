import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createNewUser(createUserDto: CreateUserDto, userId: number) {
    //return this.prisma.user.create({data: createUserDto})
    
    

    return await this.prisma.$executeRawUnsafe(`INSERT INTO public."user" (name,email,password,createdbyid) 
                                  VALUES('${createUserDto.name}','${createUserDto.email}','${createUserDto.password}',${userId});`);
    
    //return Qry;
  }

  async findAll() {
    return await this.prisma.$queryRawUnsafe(`SELECT * FROM public."user"`);
  }

  async findOne(id: number) {
    return await this.prisma.$queryRaw`SELECT id,name,email,createdbyid FROM public."user" where id = ${id}`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({where : {id}, data: updateUserDto})
  }

  async remove(id: number) {
    return await this.prisma.$executeRawUnsafe(`DELETE FROM public."user" where id = ${id}`);
  }
}
