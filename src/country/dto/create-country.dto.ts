import  { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCountryDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name: string;

}
