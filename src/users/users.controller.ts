import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({type: UserEntity})
  async createNewUser(@Body() createUserDto: CreateUserDto) {
    //return new UserEntity(await this.usersService.createNewUser(createUserDto));
    //return new UserEntity(await this.usersService.createNewUser(createUserDto));
    return await this.usersService.createNewUser(createUserDto);
  }

  @Get()
  @ApiOkResponse({type: UserEntity})
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: UserEntity})
  async findOne(@Param('id', ParseIntPipe) id: number) {
    //return await this.usersService.findOne(id);
    return new UserEntity(await this.usersService.findOne(id));
  }

  @Patch(':id')
  @ApiCreatedResponse({type: UserEntity})
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: UserEntity})
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
