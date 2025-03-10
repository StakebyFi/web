export const formatNumber = (value: number | null, options: {
  decimals?: number
  prefix?: string
  suffix?: string
  compact?: boolean
} = {}) => {
  if (value === null) return '...';

  const { prefix = '', suffix = '', compact = false } = options;
  let { decimals = 2 } = options;

  const decimalPart = String(value).split('.')[1];
  if (decimalPart && decimalPart.length > 10) {
    return `${prefix}${value}${suffix}`;
  }

  if (options.decimals === undefined) {
    let decimalPlaces = 0;
    let currentValue = Math.abs(value % 1);

    while (currentValue > 0 && decimalPlaces < 10) {
      currentValue *= 10;
      const digit = Math.trunc(currentValue) % 10;
      if (digit !== 0) {
        break;
      }
      decimalPlaces++;
      currentValue -= Math.trunc(currentValue);
    }

    decimals = decimalPlaces + 2;
  }

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    notation: compact ? 'compact' : 'standard',
  });

  return `${prefix}${formatter.format(value)}${suffix}`;
};

export const formatNumberOri = (
  value: number | null, 
  options: {
    decimals?: number
    prefix?: string
    suffix?: string
    compact?: boolean
  } = {}
): string => {
  if (value === null) return '...';

  const formatter = new Intl.NumberFormat('en-US', {
    ...(options.decimals !== undefined && {
      minimumFractionDigits: options.decimals,
      maximumFractionDigits: options.decimals,
    }),
    notation: options.compact ? 'compact' : 'standard',
  });

  return `${options.prefix ?? ''}${formatter.format(value)}${options.suffix ?? ''}`;
};
