export interface PageResult<T> {
    data : T | null | undefined,
    total_elements: number,
    total_page: number
}
