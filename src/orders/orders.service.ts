import { Injectable } from '@nestjs/common';
import { Order } from './entities/order.entity';
import { v4 as uuidv4 } from 'uuid';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CreateOrderDTO } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
    private orders: Order[] = [];

    constructor(private eventEmitter: EventEmitter2){}

    createOrder(dto: CreateOrderDTO): Order{
        const order = new Order(
            uuidv4(),
            dto.customerName,
            dto.pickupAddress,
            dto.deliveryAddress,
        )

        this.orders.push(order);

        this.eventEmitter.emit('order.created', order);

        return order;
    }

    findAllOrders(): Order[] {
        return this.orders;
    }
}
