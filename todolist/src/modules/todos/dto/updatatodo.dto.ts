import { PartialType } from "@nestjs/mapped-types";
import { TodoDto } from "./todos.dto";

export class UpdateTodoDto extends PartialType(TodoDto){}