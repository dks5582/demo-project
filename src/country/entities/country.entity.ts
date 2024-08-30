import { country } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CountryEntity implements country {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    isactive: boolean;

    @ApiProperty()
    isdeleted: boolean;

    @ApiProperty()
    createdat: Date;

    @ApiProperty()
    updatedat: Date;

    @ApiProperty()
    createdbyid: number | null;

    @ApiProperty()
    updatedbyid: number | null;

    @ApiProperty()
    sortingseq: number | null;

    @ApiProperty()
    syncid: string | null;

}
