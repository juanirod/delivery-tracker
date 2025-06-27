import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Delivery } from 'src/deliveries/entities/delivery.entity';
@Injectable()
export class DeliveryPendingListener {
    @OnEvent('delivery.pending')
    handle(delivery: Delivery) {
        console.log(`🕧 Entrega pendiente:
        - Pedido: ${delivery.orderId}
        - Conductor: ${delivery.driverId ?? 'Ninguno'}
        - Estado: ${delivery.status}`);
         
    }
}
