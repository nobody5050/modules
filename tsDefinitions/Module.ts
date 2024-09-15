import type { ModuleConfigOption } from './ModuleConfigOption';
import type { ModuleConnectionType } from './ModuleConnectionType';
import type { ModulePayloadConfig } from './ModulePayloadConfig';

export type Module = {
  displayName: string;
  type: string;
  category: string;
  connectionTypes: ModuleConnectionType[];
  storeLink?: string;
  heroImgUrl: string;
  additionalImgUrls?: string[];
  wiringDiagramImgUrl?: string;
  headerSource?: string;
  datasheet?: string;
  configOptions?: ModuleConfigOption[];
  tags: string[];
  payloadConfig: ModulePayloadConfig;
};
