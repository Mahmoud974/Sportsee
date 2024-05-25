/**
 * UserPerformance model
 */

export default class UserPerformance {
  constructor(data) {
    this.userId = data.userId;
    this.kind = data.kind;
    this.data = data.data;
  }
}