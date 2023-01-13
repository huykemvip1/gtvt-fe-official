import { SubjectProgram } from './subject-program';
export interface Documents {
    id : string,
    name : string,
    like_number : number,
    favorite_number : number,
    author: string,
    created_time : number,
    subject_program : SubjectProgram
}
