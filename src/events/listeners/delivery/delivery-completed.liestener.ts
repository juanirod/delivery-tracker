import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { Delivery } from "src/deliveries/entities/delivery.entity";

@Injectable()
export class DeliveryCompletedListener {
    @OnEvent('delivery.delivered')
    handle(delivery: Delivery) {
        console.log(`🚚 Entrega completada: 
      - Pedido: ${delivery.orderId} 
      - Conductor: ${delivery.driverId}
      - Estado: ${delivery.status}`);
    }
}