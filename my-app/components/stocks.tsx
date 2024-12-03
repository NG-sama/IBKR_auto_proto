export async function getStocks() {
  // Simulating an API call or database query
  await new Promise(resolve => setTimeout(resolve, 1000));

  return [
    { ticker: 'AAPL', companyName: 'Apple Inc.', lastClosePrice: 178.35, gainPreviousDay: 6.4 },
    { ticker: 'MSFT', companyName: 'Microsoft Corporation', lastClosePrice: 332.58, gainPreviousDay: 5.8 },
    { ticker: 'GOOGL', companyName: 'Alphabet Inc.', lastClosePrice: 138.21, gainPreviousDay: 4.7 },
    { ticker: 'AMZN', companyName: 'Amazon.com Inc.', lastClosePrice: 145.68, gainPreviousDay: 3.9 },
    { ticker: 'NVDA', companyName: 'NVIDIA Corporation', lastClosePrice: 470.11, gainPreviousDay: 7.2 },
  ];
}

export type Stock = {
  ticker: string
  companyName: string
  lastClosePrice: number
  gainPreviousDay: number
}

