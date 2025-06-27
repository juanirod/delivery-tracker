import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { Delivery } from "src/deliveries/entities/delivery.entity";

@Injectable()
export class DeliveryPickedUpListener {
    @OnEvent('delivery.picked_up')
    handle(delivery: Delivery) {
        console.log(`🚚 Entrega recogida: 
      - Pedido: ${delivery.orderId} 
      - Conductor: ${delivery.driverId}
      - Estado: ${delivery.status}`);
    }
}