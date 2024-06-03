import { Todo } from "./todos.entity";
import { Todo_REPOSITORY } from "src/core/constants";

export const todoProviders = [{
    provide: Todo_REPOSITORY,
    useValue: Todo,
}];