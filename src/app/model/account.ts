export interface Account {
    id?: string  | null,
    username?: string  | null,
    password?: string | null,
    is_active?: boolean,
    question_security?: number | null,
    answer_security?: string | null,
    email_security?: string | null,
    id_users?: string | null
}
