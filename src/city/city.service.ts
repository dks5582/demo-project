import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}

  async createCity(createCityDto: CreateCityDto, userId: number) {
    return await this.prisma.$executeRawUnsafe(`INSERT INTO public."city" (name, stateid, countryid, createdbyid)
                          VALUES('${createCityDto.name}',${createCityDto.stateid},${createCityDto.countryid},${userId})`);
  }

  async findAll() {
    return await this.prisma.$queryRaw`SELECT * FROM public."city"`;
  }

  async findOne(id: number) {
    return await this.prisma.$queryRaw`SELECT * FROM public."city" where id = ${id}`;
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return this.prisma.country.update({where: {id}, data: updateCityDto});
  }

  async remove(id: number) {
    return await this.prisma.$executeRawUnsafe(`UPDATE public."city" set isdeleted = true where id = ${id}`);
  }
}
