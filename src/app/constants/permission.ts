export const PERMISSION_ATOMS = {
  // Dashboard
  'dashboard.view': 'View Dashboard',

  // Users Management
  'users.view': 'View Users',
  'users.create': 'Create Users',
  'users.edit': 'Edit Users',
  'users.delete': 'Delete Users',
  'users.suspend': 'Suspend Users',
  'users.ban': 'Ban Users',

  // Permissions Management
  'permissions.view': 'View Permissions',
  'permissions.assign': 'Assign Permissions',
  'permissions.revoke': 'Revoke Permissions',

  // Leads Management
  'leads.view': 'View Leads',
  'leads.create': 'Create Leads',
  'leads.edit': 'Edit Leads',
  'leads.delete': 'Delete Leads',

  // Tasks Management
  'tasks.view': 'View Tasks',
  'tasks.create': 'Create Tasks',
  'tasks.edit': 'Edit Tasks',
  'tasks.delete': 'Delete Tasks',
  'tasks.assign': 'Assign Tasks',

  // Reports
  'reports.view': 'View Reports',
  'reports.generate': 'Generate Reports',
  'reports.export': 'Export Reports',

  // Audit Log
  'audit.view': 'View Audit Logs',

  // Settings
  'settings.view': 'View Settings',
  'settings.edit': 'Edit Settings',
}

export const ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  AGENT: 'agent',
  CUSTOMER: 'customer',
}

export const ROLE_PERMISSIONS = {
  admin: Object.keys(PERMISSION_ATOMS),
  manager: [
    'dashboard.view',
    'users.view',
    'users.create',
    'users.edit',
    'users.suspend',
    'permissions.view',
    'permissions.assign',
    'leads.view',
    'leads.create',
    'leads.edit',
    'tasks.view',
    'tasks.create',
    'tasks.edit',
    'tasks.assign',
    'reports.view',
    'audit.view',
    'settings.view',
  ],
  agent: [
    'dashboard.view',
    'leads.view',
    'leads.create',
    'leads.edit',
    'tasks.view',
    'tasks.edit',
    'reports.view',
  ],
  customer: ['dashboard.view'],
}

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_ERROR: 500,
}
