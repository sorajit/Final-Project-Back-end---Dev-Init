declare enum Status {
    pending = "pending",
    completed = "completed"
}
export declare class TodoDto {
    readonly title: string;
    readonly description: string;
    readonly due_date: string;
    readonly priority: number;
    readonly status: Status;
}
export {};
