import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { DeliveriesService } from 'src/deliveries/deliveries.service';
import { Driver } from 'src/drivers/entities/driver.entity';
@Injectable()
export class DriverAvailableListener {
    constructor(private readonly deliveriesService: DeliveriesService) { }

    @OnEvent('driver.available')
    async handle(driver: Driver) {
        const pending = await this.deliveriesService.findPending();
        if (!pending.length) return;

        const delivery = pending[0];
        delivery.driver = driver;
        delivery.status = 'assigned';

        this.deliveriesService.markDriverBusy(driver.id); // opcional, o manual

        console.log(`🚗 Conductor ${driver.name} asignado a pedido pendiente ${delivery.orderId}`);

        this.deliveriesService.emitAssigned(delivery);
    }
}
