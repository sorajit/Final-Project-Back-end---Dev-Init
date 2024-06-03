import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { TodosService } from './todos.service';
import { AuthGuard } from '@nestjs/passport';
import { Todo as TodoEntity } from './todos.entity';
import { TodoDto } from './dto/todos.dto';
import { UpdateTodoDto } from './dto/updatatodo.dto';
@Controller('todos')
export class TodosController {
    constructor(private readonly todoService: TodosService){}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async findAll(@Request() req){
        return this.todoService.findAll(req.user.user_id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    async findOne(@Param('id') id: number, @Request() req): Promise<TodoEntity>{
        return this.todoService.findOne(id, req.user.user_id)
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() todo: TodoDto, @Request() req): Promise<TodoEntity>{
        return await this.todoService.create(todo, req.user.user_id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update(@Param('id') id: number, @Body() updateTodo: UpdateTodoDto, @Request() req): Promise<TodoEntity> {
        const updatedTodo = await this.todoService.update(id, updateTodo, req.user.user_id);
        return updatedTodo;
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async delete(@Param('id') id: number, @Request() req){
        const deleted = await this.todoService.delete(id, req.user.user_id)
        if (deleted ===0) {
            throw new NotFoundException('This to-do doesn\'t exist');
        }
        return  'Successfully deleted';
    }
}
