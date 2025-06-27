export class Order {
    constructor(
        public id: string,
        public customerName: string,
        public pickupAddress: string,
        public deliveryAddress: string,
        public status: 'created' | 'assigned' | 'picked_up' | 'delivered' = 'created',
    ) { }
}