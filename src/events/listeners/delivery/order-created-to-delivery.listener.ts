import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { DeliveriesService } from "src/deliveries/deliveries.service";
import { Order } from "src/orders/entities/order.entity";

@Injectable()
export class OrderCreatedToDeliveryListener {
    constructor(
        private readonly deliveriesService: DeliveriesService, 
    ) { }

    @OnEvent('order.created')
    handle(event: Order) {
        console.log(`🚚 Asignando rider para pedido ${event.id} de ${event.customerName}`);
        this.deliveriesService.assignDriver(event);
        
    }
}