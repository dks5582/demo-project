import { IsNotEmpty, IsString, IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateStateDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name: string;

    @IsNumber()
    @ApiProperty()
    countryid: number | null;
}
