export class Menu {
    constructor (
        public  id: string,
        public name: string,
        public description: string,
        public price: number,
        public restaurantId: string,
        public image: string
	//	public user: string
	 ) {}
}


export interface Page {
    data: Array<Menu>;
    totalPages: number;
    total: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort?: any;
    numberOfElements: number;
    first: boolean;
};