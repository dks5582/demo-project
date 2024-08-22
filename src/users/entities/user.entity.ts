import { user } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";

export class UserEntity implements user {
    constructor(partial: Partial<UserEntity>) {
        Object.assign(this,partial);
    }

    @ApiProperty()
    id: number;

    @ApiProperty()
    createdat: Date;

    @ApiProperty()
    updatedat: Date;

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @Exclude()
    password: string;

    @ApiProperty()
    createdbyid: number;
}
