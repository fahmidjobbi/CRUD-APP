import { Controller,Get, Put,Param, Post,Delete, Query } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { UserDto } from 'src/dto/users.dto';
import { User } from 'src/models/models.users';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly service:UsersService) {};
    @Post()
    Add(@Body() body:UserDto) {
        return this.service.Add(body);
    }

    @Get()
    FindAll() {
        return  this.service.FindAll();
    }

    @Get('/:id')
    FindOne(@Param('id') id:string) {
        return this.service.FindOne(id);
    }

    @Put('/:id')
    Update(@Param('id') id:string, @Body() body:UserDto) {
        return this.service.Update(id, body);
    }

    @Delete('/:id')
    Delete(@Query('id') id) {
        return this.service.Delete(id);
    }

    @Post('/search')
    Search(@Query('key') key) {
        return this.service.Search(key);
    }

    @Post('faker')
    Faker() {
        return this.service.Faker();
    }
}
