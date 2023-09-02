const mapping: Record<string, string> = {
  accounts: 'account',
  finteches: 'fintech',
  loans: 'loan',
  transactions: 'transaction',
  users: 'user',
  'virtual-cards': 'virtual_card',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
