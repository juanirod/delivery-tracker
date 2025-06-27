import { Injectable } from '@nestjs/common';
import * as notifier from 'node-notifier';
import * as path from 'path';
@Injectable()
export class NotificationService {
    notify(title: string, message: string) {
        console.log();
        notifier.notify({
            icon: path.resolve(__dirname, '../../assets/icon.png'), // Ruta absoluta
            title,
            message,
            sound: true,
            wait: false,
            appName: 'Delivery Tracker',
        });
    }
}
