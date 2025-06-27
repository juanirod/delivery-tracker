import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { NotificationService } from 'src/notifications/notifications.service';
import { Order } from 'src/orders/entities/order.entity';

@Injectable()
export class OrderCreatedListener {
    constructor(private readonly notifier: NotificationService,
    ) { }
    @OnEvent('order.created')
    handleOrderCreated(order: Order) {
        console.log(`🔔 Pedido creado: ${order.id} para ${order.customerName}`);
        this.notifier.notify(
            '🔔 Pedido Creado',
            `El pedido #${order.id} ha sido creado para el cliente ${order.customerName}.`,
        );
    }
}