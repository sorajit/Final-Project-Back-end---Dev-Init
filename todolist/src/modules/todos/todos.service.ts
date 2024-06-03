import { Injectable,Inject, NotFoundException } from '@nestjs/common';
import { Todo } from './todos.entity';
import { TodoDto } from './dto/todos.dto';
import { Todo_REPOSITORY } from 'src/core/constants';
import {UpdateTodoDto} from './dto/updatatodo.dto';
@Injectable()
export class TodosService {
    constructor(@Inject(Todo_REPOSITORY) private readonly todoRepository: typeof Todo){}

    async create(todo: TodoDto, user_id: number): Promise<Todo>{
        return await this.todoRepository.create<Todo>({...todo, user_id})
    }

    async findAll(user_id: number): Promise<Todo[]>{
        return await this.todoRepository.findAll<Todo>({
            where: {user_id},
        })
    }

    async findOne(todo_id: number, user_id: number): Promise<Todo>{
        const todo = await this.todoRepository.findOne<Todo>({
            where: {todo_id, user_id},
        });
        if(!todo){
            throw new NotFoundException('This To-do doesn\'t exist');
        }
        return todo
    }

    async update(todo_id: number, updateTodo: UpdateTodoDto, user_id: number){
        const todo = await this.findOne(todo_id,user_id);
        const [numberOfAffectedRows, [updateResult]] = await this.todoRepository.update(
            {...todo['dataValues'],...updateTodo},
            { where: {todo_id, user_id}, returning: true}
        )
        return updateResult
    }

    async delete(todo_id: number, user_id: number){
        return await this.todoRepository.destroy({ where: { todo_id, user_id } });
    }
}
