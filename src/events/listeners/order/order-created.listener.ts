import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Order } from 'src/orders/entities/order.entity';

@Injectable()
export class OrderCreatedListener {
    @OnEvent('order.created')
    handleOrderCreated(order: Order) {
        console.log(`🔔 Pedido creado: ${order.id} para ${order.customerName}`);
    }
}