export type DeliveryStatus = 'pending_driver' | 'assigned' | 'picked_up' | 'delivered';

export class Delivery {
    constructor(
        public id: string,
        public orderId: string,
        public driverId: string | null,
        public status: DeliveryStatus
    ) { }
}