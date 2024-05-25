/**¨
 * UserSessions model
 */
export default class UserSessions {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions;
  }
}