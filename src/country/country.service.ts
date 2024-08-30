import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}

  async createCountry(createCountryDto: CreateCountryDto, userId: number) {
    return await this.prisma.$executeRawUnsafe(`INSERT INTO public."country" (name, createdbyid)
                    VALUES('${createCountryDto.name}',${userId})`);
  }

  async findAll() {
    return await this.prisma.$queryRaw`SELECT * FROM public."country"`;
  }

  async findOne(name: string) {
    return await this.prisma.$queryRaw`SELECT * FROM public."country" where upper(name) = upper(${name})`;
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return this.prisma.country.update({where: {id}, data: updateCountryDto});
    
  }

  async remove(id: number) {
    return await this.prisma.$executeRawUnsafe(`UPDATE public."country" set isdeleted=true where id = ${id}`);
  }
}
