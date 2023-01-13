import { Course } from './course';
export interface Users {
    id?: string | null,
    first_name?: string | null,
    last_name?: string  | null,
    dob?: number | null,
    gender?: number | null,
    phone_number?: string | null,
    email?: string | null,
    address_details?: string | null,
    district?: string | null,
    province?: string | null,
    job_title ?: number | null,
    job_position?: number | null,
    achievements?: string[] | null,
    facebook?: string | null,
    courses?: Course[] | null
}
