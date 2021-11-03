export interface User {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export interface UsersResponse{
    page:number,
    total_pages:number,
    data:Array<User>
}