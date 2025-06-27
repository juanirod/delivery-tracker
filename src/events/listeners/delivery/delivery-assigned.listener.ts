import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Delivery } from 'src/deliveries/entities/delivery.entity';
import { NotificationService } from 'src/notifications/notifications.service';
@Injectable()
export class DeliveryAssignedListener {

    constructor(private readonly notifier: NotificationService) { }
  
    @OnEvent('delivery.assigned')
    handle(delivery: Delivery) {
        console.log(`📦 Entrega asignada: 
      - Pedido: ${delivery.orderId} 
      - Conductor: ${delivery.driver?.name}
      - Estado: ${delivery.status}`);

        this.notifier.notify(
            '📦 Tenemos Rider ! ',
            ` Tu rider ${delivery.driver?.name} está en busca de tu pedido `,
        );
        
    }
}
