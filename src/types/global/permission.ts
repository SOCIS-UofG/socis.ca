/**
 * Permissions that an user can inherit
 *
 * `DEFAULT` - The default permission that all users have
 * `CREATE_EVENT` - The permission to create an event
 * `EDIT_EVENT` - The permission to edit an event
 * `DELETE_EVENT` - The permission to delete an event
 * `ADMIN` - The permission to do anything
 */
export enum Permission {
  /**
   * Every user has this permission by default.
   */
  DEFAULT = "default",
  /**
   * The permission to create an event.
   *
   * If an user has the create_event permission, they can create an event on the
   * /events/create page. Otherwise, an invalid permissions notification will appear.
   */
  CREATE_EVENT = "create_event",
  /**
   * The permission to edit an event.
   *
   * If an user has the edit_event permission, they can edit an event on the
   * /events/[id]/edit page. Otherwise, an invalid permissions notification will appear.
   *
   * A button to edit an event will appear on the /events page within the event card.
   */
  EDIT_EVENT = "edit_event",
  /**
   * The permission to delete an event.
   *
   * If an user has the delete_event permission, they can delete an event on the
   * /events/delete page. Otherwise, an invalid permissions notification will appear.
   *
   * A button to delete an event will appear on the /events page within the event card.
   */
  DELETE_EVENT = "delete_event",
  /**
   * The permission to do anything.
   *
   * If an user has the admin permission, they can do anything on the website.
   * This includes creating, editing, and deleting events.
   */
  ADMIN = "admin",
}
