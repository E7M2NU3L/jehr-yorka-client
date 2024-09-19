import * as z from 'zod';

export const TasksSchema = z.object({
    title : z.string(),
    description : z.string(),
    dueDate : z.string(),
    assignedTo : z.string(),
});