import { TodosService } from './todos.service';
import { Todo as TodoEntity } from './todos.entity';
import { TodoDto } from './dto/todos.dto';
import { UpdateTodoDto } from './dto/updatatodo.dto';
export declare class TodosController {
    private readonly todoService;
    constructor(todoService: TodosService);
    findAll(req: any): Promise<TodoEntity[]>;
    findOne(id: number, req: any): Promise<TodoEntity>;
    create(todo: TodoDto, req: any): Promise<TodoEntity>;
    update(id: number, updateTodo: UpdateTodoDto, req: any): Promise<TodoEntity>;
    delete(id: number, req: any): Promise<string>;
}
