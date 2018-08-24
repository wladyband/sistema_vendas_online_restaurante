export class Restaurant {
	constructor (
       
        public  id: string,
      	public name: string,
        public category: string,
        public deliveryEstimate: string,
		    public rating: number,
        public hours?: string,
        public about?: string,
        public image?: string
	//	public user: string
	 ) {}
}
