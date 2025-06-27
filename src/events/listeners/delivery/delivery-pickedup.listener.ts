import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { Delivery } from "src/deliveries/entities/delivery.entity";
import { NotificationService } from "src/notifications/notifications.service";

@Injectable()
export class DeliveryPickedUpListener {
  constructor(private readonly notifier: NotificationService) { }


  @OnEvent('delivery.picked_up')
  handle(delivery: Delivery) {
    console.log(`🚚 En camino ! 
      - Pedido: ${delivery.orderId} 
      - Conductor: ${delivery.driver?.name}
      - Estado: ${delivery.status}`);

    this.notifier.notify(
      '🚚 En camino !',
      `Tu rider ${delivery.driver?.name} ha recogido tu pedido y está en camino`,
    );

  }
}