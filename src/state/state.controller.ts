import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { StateService } from './state.service';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { StateEntity } from './entities/state.entity';
import { User } from 'src/users/user.decorator';

@Controller('state')
@ApiTags('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({type: StateEntity})
  @ApiBearerAuth()
  create(@Body() createStateDto: CreateStateDto, @User() user) {
    return this.stateService.createState(createStateDto, user.id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({type: StateEntity})
  @ApiBearerAuth()
  findAll() {
    return this.stateService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({type: StateEntity})
  findOne(@Param('id') id: string) {
    return this.stateService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({type: StateEntity})
  update(@Param('id') id: string, @Body() updateStateDto: UpdateStateDto) {
    return this.stateService.update(+id, updateStateDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({type: StateEntity})
  remove(@Param('id') id: string) {
    return this.stateService.remove(+id);
  }
}
