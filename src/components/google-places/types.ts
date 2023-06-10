import { Place } from '../../domain/domain';

export interface GeoAddressComponent {
  long_name: string,
  short_name: string,
  types: string[],
}

export type GeoAddress = Partial<Place>;
