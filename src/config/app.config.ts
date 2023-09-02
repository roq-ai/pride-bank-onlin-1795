interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Account Owner'],
  customerRoles: ['Customer'],
  tenantRoles: [
    'Account Owner',
    'Business Account Owner',
    'Authorized User',
    'Loan Officer',
    'Customer Service Representative',
  ],
  tenantName: 'Fintech',
  applicationName: 'Pride-Bank Online',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own digital bank account',
    'Carry out debit and credit transactions',
    'Apply for and repay loans',
    'Create a virtual card and transfer funds',
  ],
  ownerAbilities: [
    'Manage a Fintech entity',
    'Invite Business Account Owners, Authorized Users, Loan Officers, and Customer Service Representatives to the Fintech entity',
  ],
};
