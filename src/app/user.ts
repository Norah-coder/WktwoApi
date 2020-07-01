 
export class User {
    constructor(
        public login: string,
        public html_url: string,
        public name: string,
        public avatar_url: string,
        public public_repository: number,
        public followers: number,
        public following: number,
    ){}
}
