/**
 * UserInfos model
 */
export default class UserInfos {
  constructor(data) {
    this.id = data.id;
    this.userInfos = data.userInfos;
    this.todayScore = data.todayScore || data.score;
    this.keyData = data.keyData;
  }
}