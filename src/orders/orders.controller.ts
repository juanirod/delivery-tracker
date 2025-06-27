import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dto/create-order.dto';

@Controller('api/orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) { }

    @Post()
    create(@Body() dto: CreateOrderDTO) {
        return this.ordersService.createOrder(dto);
    }

    @Get()
    findAll() {
        return this.ordersService.findAllOrders();
    }

}
