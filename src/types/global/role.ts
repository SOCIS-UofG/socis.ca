/**
 * Enum for the different roles that a user can have in the system.
 *
 * `MEMBER` - The default role that all users have
 */
export enum Role {
  MEMBER = "Member",
  PRESIDENT = "President",
  VICE_PRESIDENT_INTERNAL = "Vice-President of Internal Affairs",
  VICE_PRESIDENT_EXTERNAL = "Vice-President of External Affairs",
  VICE_PRESIDENT_COMM = "Vice-President of Communications",
  VICE_PRESIDENT_TECH = "Vice-President of Technology",
  VICE_PRESIDENT_FINANCIAL = "Vice-President of Financial Affairs",
  VICE_PRESIDENT_SOCIAL = "Vice-President of Social Affairs",
  EVENTS_TEAM = "Events Team",
  MARKETING_TEAM = "Marketing Team",
  TECH_TEAM = "Technology Team",
  PROJECT_MANAGER = "Project Manager",
  SERM_APPROVED = "SE&RM Approved",
}
