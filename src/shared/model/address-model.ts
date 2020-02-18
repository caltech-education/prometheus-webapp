import { AbstractModel } from './model.interface'

export interface Address extends AbstractModel {
    latitude: number;
    longitude: number;
    zipCode: string;
    address: string;
    addressNumber: string;
    addressComplement: string;
    neighborhood: string;
    idIBGECountry: number;
    idIBGECounty: number;
}
