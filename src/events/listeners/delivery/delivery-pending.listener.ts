import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Delivery } from 'src/deliveries/entities/delivery.entity';
import { NotificationService } from 'src/notifications/notifications.service';
@Injectable()
export class DeliveryPendingListener {
    constructor(private readonly notifier: NotificationService) { }
    @OnEvent('delivery.pending')
    handle(delivery: Delivery) {
        console.log(`🕧 Entrega pendiente:
        - Pedido: ${delivery.orderId}
        - Conductor: ${delivery.driver?.name ?? 'Ninguno'}
        - Estado: ${delivery.status}`);

        this.notifier.notify(
            '🕧 Buscando un Rider',
            `Estamos buscando un rider para tu pedido ${delivery.orderId}. Por favor, espera un momento.`,
        );


    }
}
