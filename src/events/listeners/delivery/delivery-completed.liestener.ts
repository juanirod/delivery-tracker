import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { Delivery } from "src/deliveries/entities/delivery.entity";
import { NotificationService } from "src/notifications/notifications.service";

@Injectable()
export class DeliveryCompletedListener {
  constructor(private readonly notifier: NotificationService) { }

  @OnEvent('delivery.delivered')
  handle(delivery: Delivery) {
    console.log(`🚚 Entrega completada: 
      - Pedido: ${delivery.orderId} 
      - Conductor: ${delivery.driver?.name}
      - Estado: ${delivery.status}`);

    this.notifier.notify(
      '🚚 Entrega Completada',
      `Gracias por tu paciencia, tu pedido ha sido entregado por ${delivery.driver?.name}.`,
    );
  }
}