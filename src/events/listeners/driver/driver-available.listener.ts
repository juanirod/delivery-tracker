import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { DeliveriesService } from 'src/deliveries/deliveries.service';
@Injectable()
export class DriverAvailableListener {
    constructor(private readonly deliveriesService: DeliveriesService) { }

    @OnEvent('driver.available')
    async handle({ driverId }: { driverId: string }) {
        const pending = await this.deliveriesService.findPending();
        if (!pending.length) return;

        const delivery = pending[0];
        delivery.driverId = driverId;
        delivery.status = 'assigned';

        this.deliveriesService.markDriverBusy(driverId); // opcional, o manual

        console.log(`🚗 Conductor ${driverId} asignado a pedido pendiente ${delivery.orderId}`);

        this.deliveriesService.emitAssigned(delivery);
    }
}
