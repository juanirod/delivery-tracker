export class Driver {
    constructor(
        public id: string,
        public name: string,
        public status: 'available' | 'busy' = 'available'
    ) { }
}
  