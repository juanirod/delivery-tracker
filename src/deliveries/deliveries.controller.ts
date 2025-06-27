import { Controller, Get, Param, Patch } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';

@Controller('api/deliveries')
export class DeliveriesController {
    constructor(private readonly deliveriesService: DeliveriesService) { }

    @Get()
    findAll() {
        return this.deliveriesService.findAllDeliveries();
    }

    @Patch(':id/pickup')
    pickup(@Param('id') id: string) {
        return this.deliveriesService.pickupDelivery(id);
    }

    @Patch(':id/complete')
    complete(@Param('id') id: string) {
        return this.deliveriesService.completeDelivery(id);
    }
}
