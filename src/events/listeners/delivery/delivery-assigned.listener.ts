import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Delivery } from 'src/deliveries/entities/delivery.entity';
@Injectable()
export class DeliveryAssignedListener {
    @OnEvent('delivery.assigned')
    handle(delivery: Delivery) {
        console.log(`📦 Entrega asignada: 
      - Pedido: ${delivery.orderId} 
      - Conductor: ${delivery.driverId}
      - Estado: ${delivery.status}`);
    }
}
