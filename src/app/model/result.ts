export interface Result<T> {
    message ?: string | null,
    data ?: T | null,
    code ?: string | null
}
