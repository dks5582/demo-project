import { IsNotEmpty, IsString, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCityDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name: string;

    @IsNumber()
    @ApiProperty()
    stateid: number | null;

    @IsNumber()
    @ApiProperty()
    countryid: number | null;
    
}
