import { Role } from "@/types";

/**
 * Sort the roles by their priority.
 */
export function compareRoles(a: string[], b: string[]): number {
  const roles: string[] = [
    Role.PRESIDENT,
    Role.VICE_PRESIDENT_INTERNAL,
    Role.VICE_PRESIDENT_EXTERNAL,
    Role.VICE_PRESIDENT_COMM,
    Role.VICE_PRESIDENT_TECH,
    Role.VICE_PRESIDENT_FINANCIAL,
    Role.VICE_PRESIDENT_SOCIAL,
    Role.PROJECT_MANAGER,
    Role.EVENTS_TEAM,
    Role.MARKETING_TEAM,
    Role.TECH_TEAM,
    Role.SERM_APPROVED,
    Role.MEMBER,
  ];

  // get the users highest roles
  const aRoles = a.filter((role) => roles.includes(role));
  const bRoles = b.filter((role) => roles.includes(role));

  // get the highest role (sort)
  const aRole = aRoles.sort((a, b) => roles.indexOf(a) - roles.indexOf(b))[0];
  const bRole = bRoles.sort((a, b) => roles.indexOf(a) - roles.indexOf(b))[0];

  if (!aRole || !bRole) {
    return 0;
  }

  // return the comparison
  return roles.indexOf(aRole) - roles.indexOf(bRole);
}
