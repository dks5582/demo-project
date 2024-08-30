import { state } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class StateEntity implements state {
    @ApiProperty()
    id: number;

    @ApiProperty()
    countryid: number | null;

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
