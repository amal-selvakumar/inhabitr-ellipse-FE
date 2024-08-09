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
  export const checkItems = (items:any) => {
    if (Object.keys(items).length === 0) {
      return true; 
    }
    const hasQuantityGreaterThanOne = Object.values(items).some((item:any) => item.quantity >= 1);
  
    return !hasQuantityGreaterThanOne; 
  };