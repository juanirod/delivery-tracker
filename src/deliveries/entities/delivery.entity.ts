import { Driver } from "src/drivers/entities/driver.entity";

export type DeliveryStatus = 'pending_driver' | 'assigned' | 'picked_up' | 'delivered';

export class Delivery {
    constructor(
        public id: string,
        public orderId: string,
        public driver: Driver | null,
        public status: DeliveryStatus
    ) { }
}