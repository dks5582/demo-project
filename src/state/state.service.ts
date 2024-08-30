import { Injectable } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StateService {
  constructor(private prisma: PrismaService) {}

  async createState(createStateDto: CreateStateDto, userId: number) {
    return await this.prisma.$executeRawUnsafe(`INSERT INTO public."state" (name, createdbyid, countryid)
                            values('${createStateDto.name}',${userId},${createStateDto.countryid})`);
  }

  async findAll() {
    return await this.prisma.$queryRaw`SELECT * FROM public."state"`;
  }

  async findOne(id: number) {
    return await this.prisma.$queryRaw `SELECT * FROM public."state" where id = ${id}`;
  }

  update(id: number, updateStateDto: UpdateStateDto) {
    return this.prisma.state.update({where: {id}, data: updateStateDto});
  }

  async remove(id: number) {
    return await this.prisma.$executeRawUnsafe(`UPDATE public."state" set isdeleted = true where id = ${id} `);
  }
}
