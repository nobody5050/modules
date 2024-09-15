export type ModulePayloadConfigEntryType = {
  name: string;
  sizeBytes: number;
};

export const ModulePayloadEntryTypeInt8_t: ModulePayloadConfigEntryType = {
  name: 'int8_t',
  sizeBytes: 1
};

export const ModulePayloadEntryTypeUInt8_t: ModulePayloadConfigEntryType = {
  name: 'uint8_t',
  sizeBytes: 1
};

export const ModulePayloadEntryTypeInt16_t: ModulePayloadConfigEntryType = {
  name: 'int16_t',
  sizeBytes: 2
};

export const ModulePayloadEntryTypeUInt16_t: ModulePayloadConfigEntryType = {
  name: 'uint16_t',
  sizeBytes: 2
};

export const ModulePayloadEntryTypeInt32_t: ModulePayloadConfigEntryType = {
  name: 'int32_t',
  sizeBytes: 4
};

export const ModulePayloadEntryTypeUInt32_t: ModulePayloadConfigEntryType = {
  name: 'uint32_t',
  sizeBytes: 4
};

export const ModulePayloadEntryTypeInt64_t: ModulePayloadConfigEntryType = {
  name: 'int64_t',
  sizeBytes: 8
};

export const ModulePayloadEntryTypeUInt64_t: ModulePayloadConfigEntryType = {
  name: 'uint64_t',
  sizeBytes: 8
};

export const ModulePayloadEntryTypeFloat: ModulePayloadConfigEntryType = {
  name: 'float',
  sizeBytes: 4
};

export const ModulePayloadEntryTypeDouble: ModulePayloadConfigEntryType = {
  name: 'double',
  sizeBytes: 8
};

export type ModulePayloadConfig = {
  memberName: string;
  type: ModulePayloadConfigEntryType;
}[];
