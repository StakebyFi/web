export const truncateAddress = (address: string, startLength = 6, endLength = 4) => {
  if (!address) return "No Account";
  const regex = new RegExp(`^(0x[a-zA-Z0-9]{${startLength}})[a-zA-Z0-9]+([a-zA-Z0-9]{${endLength}})$`);
  const match = address.match(regex);
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export const toHex = (num: number) => {
  const val = Number(num);
  return "0x" + val.toString(16);
};

export const formatPercent = (value: number) => `${(value).toFixed(2)}%`;

export const formatUSD = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

export const formatTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString();
}

export const formatAPR = (apr: number | null) => {
  if (apr === null) return 'N/A';
  return `${(apr * 100).toFixed(2)}%`;
};

export const formatTVL = (tvl: number | null) => {
  if (tvl === null) return 'N/A';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 2
  }).format(tvl);
};

export const calculatePrice = (tick: string): number => {
  return Math.pow(1.0001, parseInt(tick));
};

export const formatDate = (timestamp: string): string => {
  return new Date(parseInt(timestamp) * 1000).toLocaleString();
};

export const formatAddress = (address: string): string => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};