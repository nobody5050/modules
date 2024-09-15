import type { ModuleConfigOption } from './ModuleConfigOption';
import type { ModuleConnectionType } from './ModuleConnectionType';
import type { ModulePayloadConfig } from './ModulePayloadConfig';

export type ModuleCore = {
  displayName: string;
  type: string;
  category: string;
  heroImgUrl: string;
  connectionTypes: ModuleConnectionType[];
};

export type Module = ModuleCore & {
  storeLink?: string;
  additionalImgUrls?: string[];
  wiringDiagramImgUrl?: string;
  headerSource?: string;
  datasheet?: string;
  description?: string;
  configOptions?: ModuleConfigOption[];
  tags: string[];
  payloadConfig: ModulePayloadConfig;
};
