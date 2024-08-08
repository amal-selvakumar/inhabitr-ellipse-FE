export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
    // TypeScript ensures that the options parameter adheres to the NumberFormatOptions type
    const options: Intl.NumberFormatOptions = {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
  
    return new Intl.NumberFormat('en-US', options).format(amount);
  };