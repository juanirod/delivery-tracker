import { Injectable } from '@nestjs/common';
import { Driver } from './entities/driver.entity';

@Injectable()
export class DriversService {
    private drivers: Driver[] = [
        new Driver('driver-1', 'John Doe'),
        // new Driver('driver-2', 'Jane Smith'),
        // new Driver('driver-3', 'Alice Johnson'),
        // new Driver('driver-4', 'Bob Brown'),
    ]

    findAvailable():Driver | null {
        return this.drivers.find(driver => driver.status === 'available') ?? null;
    }

    markAsBusy(driverId: string){
        const driver = this.drivers.find(driver => driver.id === driverId);
        if (driver) {
            driver.status = 'busy';
        }
    }

    markAsAvailable(driverId: string){
        const driver = this.drivers.find(driver => driver.id === driverId);
        if (driver) {
            driver.status = 'available';
        }
    }

    findAll(): Driver[] {
        return this.drivers;
    }
}
