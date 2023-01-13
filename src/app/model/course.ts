import { Users } from './users';
export interface Course{
    id ?: number | null,
    name ?: string | null,
    users? : Users[] | null,
    user?:Users| null
}