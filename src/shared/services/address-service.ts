import { IResponse } from './../model/shared.interface';
import { Address } from './../model/address-model';
import { AbstractService } from './abstract-service';

export class AddressService extends AbstractService<Address> {
    constructor() {
        super('addresses');
    }

    findByZipCode(zipCode: string): Promise<IResponse<Address>> {
        return this.find(`zipcode/${zipCode}`)
    }
}
