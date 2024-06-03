import { Todo } from './todos.entity';
import { TodoDto } from './dto/todos.dto';
import { UpdateTodoDto } from './dto/updatatodo.dto';
export declare class TodosService {
    private readonly todoRepository;
    constructor(todoRepository: typeof Todo);
    create(todo: TodoDto, user_id: number): Promise<Todo>;
    findAll(user_id: number): Promise<Todo[]>;
    findOne(todo_id: number, user_id: number): Promise<Todo>;
    update(todo_id: number, updateTodo: UpdateTodoDto, user_id: number): Promise<Todo>;
    delete(todo_id: number, user_id: number): Promise<number>;
}
