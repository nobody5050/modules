export type ConfigOptionType = 'text' | 'number' | 'boolean' | 'select';

export type BaseConfigOption = {
  type: ConfigOptionType;
  keyName: string;
  label: string;
  required: boolean;
  defaultValue?: any;
  description?: string;
};

export type ModuleTextConfigOption = BaseConfigOption & {
  type: 'text';
  length?: {
    min?: number;
    max?: number;
  };
  matches?: string;
};

export type ModuleNumberConfigOption = BaseConfigOption & {
  type: 'number';
  value?: {
    min?: number;
    max?: number;
  };
  step?: number;
  floating?: boolean;
};

export type ModuleBooleanConfigOption = BaseConfigOption & {
  type: 'boolean';
  style?: 'checkbox' | 'switch';
};

export type ModuleSelectConfigOption = BaseConfigOption & {
  type: 'select';
  options?: {
    name: string;
    value: any;
  }[];
  populationSources?: ('board.DIO' | 'board.AIO')[];
};

export type ModuleConfigOption =
  | ModuleTextConfigOption
  | ModuleNumberConfigOption
  | ModuleBooleanConfigOption
  | ModuleSelectConfigOption;
