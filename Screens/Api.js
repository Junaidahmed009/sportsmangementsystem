import axios from 'axios';

class Api {
  //  constructor() {
  //   this.apiClient = axios.create({
  //     baseURL: 'http://192.168.1.49/SportsManagementSystemBE/api/',
  //     timeout: 10000,
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //   });
  // }
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'http://192.168.117.132/SportsManagementSystemBE/api/',
      timeout: 5000,
      headers: {
        'Content-type': 'application/json',
      },
    });
  }
  //UsersAccount
  signup(user) {
    return this.apiClient.post('Users/SignupUser', user);
  }
  login(reg_no, password) {
    return this.apiClient.get(
      `Users/LoginUser?regno=${reg_no}&pass=${password}`,
    );
  }
  forgetpassword(userdetails) {
    return this.apiClient.post('Users/Forgetpasswordverification', userdetails);
  }
  resetPassword(passwordDetails) {
    return this.apiClient.put('Users/Submitnewpassword', passwordDetails);
  }

  //ChairpersonScreens
  addsession(sessiondetail) {
    return this.apiClient.post('Session/PostSession', sessiondetail);
  }

  eventmanagerdata(data) {
    return this.apiClient.post('Sports/PostEventManagers', data);
  }
  //Rule of game Screen.
  fetchSports() {
    return this.apiClient.get('Sports/GetSports');
  }
  fetchrules(Sportsid) {
    return this.apiClient.get('Rules/FetchRules', {params: {Sportsid}});
  }
  rulesofgames(saverules) {
    return this.apiClient.post('Rules/UpdateRules', saverules);
  }
  //EventManagerSelection screen.
  getsportsandmanger() {
    return this.apiClient.get('Sports/GetSportsandManagers');
  }
  savedata(data) {
    return this.apiClient.post('Sports/SaveManagersdata', data);
  }
  //Session Screens
  fetchSessions() {
    return this.apiClient.get('Session/GetsessionsandSports');
  }

  // Cricket registration Screens
  getteamstatus(tname) {
    return this.apiClient.get('Team/CheckTeamNames', {params: {tname}});
  }
  fetchstudents(valueCourse, valueSection, valueSem) {
    //course, sections,
    //, Gender
    return this.apiClient.get(
      `Students/GetStudents?semno=${valueSem}&course=${valueCourse}&sections=${valueSection}&`, //&gender=${Gender},
    );
  }
  postteamdata(teamdata) {
    return this.apiClient.post('Team/AddTeam', teamdata);
  }
  fetchteamSports() {
    return this.apiClient.get('Sports/GetSports');
  }
  postPlayersdata(Playersdata) {
    return this.apiClient.post('Players/PostPlayers', Playersdata);
  }
  handleloginuser(id) {
    return this.apiClient.get(`Players/HandleUser?userid=${id}`);
  }
  PostFixturesData(AllData) {
    return this.apiClient.post('Fixture/PostFixtures', AllData);
  }
  fetchCricketrules() {
    return this.apiClient.get('Rules/FetchCricketRules');
  }
  FetchCricketTeams() {
    return this.apiClient.get('Team/GetCricketTeams');
  }
  FetchallTeams(id) {
    return this.apiClient.get(`Team/GetunapprovedTeams?id=${id}`);
  }
  TeamStatusUpdate(id) {
    return this.apiClient.put(`Team/UpdateTeamStatus?id=${id}`);
  }
  FetchTeamsPlayers(Teamid) {
    return this.apiClient.get(`Players/GetTeamPlayers?id=${Teamid}`);
  }
  fetchteams1(id) {
    return this.apiClient.get(`Team/GetAllLatestTeams?userid=${id}`);
  }
  fetchfixtures(userid) {
    return this.apiClient.get(`Fixture/GetFixtures?userid=${userid}`);
  }
  fetchteams(userid) {
    return this.apiClient.get(`Team/AllApprovedTeams?id=${userid}`);
  }
  fetchaccountdata(userid) {
    return this.apiClient.get(`Users/Accountuserdata?id=${userid}`);
  }
  PostImage(formData) {
    return this.apiClient.post(`Team/UploadImage`, formData);
  }
  getManagerSport(id) {
    return this.apiClient.get(`Fixture/GetManagerSport?id=${id}`);
  }
  updatefixtures(AllData) {
    return this.apiClient.put('Fixture/UpdateFixtures', AllData);
  }
  fetchUsersfixtures(id, value) {
    return this.apiClient.get(
      `Fixture/GetUsersFixtures?sportsId=${id}&sessionid=${value}`,
    );
  }
  fetchManagerfixtures(id) {
    return this.apiClient.get(`Fixture/GetManagerFixtures?userid=${id}`);
  }
  fetchteamsandplayers(Fixtureid) {
    return this.apiClient.get(`Team/PlayingTeams?fixtureId=${Fixtureid}`);
  }
  PostCricketScore(payload, imagepath) {
    return this.apiClient.post(
      `CricketScore/AddCricketScore?image_path=${imagepath}`,
      payload,
    );
  }
  PostFootballScore(payload) {
    return this.apiClient.post('Scoring/AddOrUpdateGoalBasedScore', payload);
  }
  PostpointBaseScore(payload) {
    return this.apiClient.post('Scoring/AddOrUpdatePointBasedScore', payload);
  }
  fetchCaptionTeams(id) {
    return this.apiClient.get(`Team/GetUserAppliedTeams?userId=${id}`);
  }
  PostCricketEvents(payload, imgpath) {
    return this.apiClient.post(
      `MatchEvents/AddMatchEvents?ImgPath=${imgpath}`,
      payload,
    );
  }
  EndFootballMatch(Fixtureid) {
    return this.apiClient.put(
      `Scoring/UpdateGoalBasedWinner?fixtureId=${Fixtureid}`,
    );
  }
  Endpointbasematch(Fixtureid) {
    return this.apiClient.put(
      `Scoring/UpdatePointBasedWinner?fixtureId=${Fixtureid}`,
    );
  }
  EndCricketMatch(Fixtureid) {
    return this.apiClient.put(
      `CricketScore/UpdateCricketWinner?fixtureId=${Fixtureid}`,
    );
  }
  fetchFixturesAndScores(fixtureid) {
    return this.apiClient.get(`Scoring/MatchScores?matchId=${fixtureid}`);
  }
  fetchBatsmanAndBowlerData(Fixtureid) {
    return this.apiClient.get(
      `CricketScore/GetCricketScores?fixtureid=${Fixtureid}`,
    );
  }
  // fetchBatsmanAndBowlerData(Fixtureid) {
  //   return this.apiClient.get(
  //     `CricketScore/GetCricketScores?fixtureid=${Fixtureid}`,
  //   );
  // }

  fetchcricketDetails(fixtureid) {
    return this.apiClient.get(`CricketScore/GetMatchScore?Fixid=${fixtureid}`);
  }
  Fetchdeliveriesdetails(fixtureid) {
    return this.apiClient.get(
      `CricketScore/ballByballData?specificFixtureId=${fixtureid}`,
    );
  }
  Fetchimagepath(fixtureid) {
    return this.apiClient.get(
      `CricketScore/ballByballData?specificFixtureId=${fixtureid}`,
    );
  }
  fetchmotmdetails(fixtureid) {
    return this.apiClient.get(`CricketScore/GetImagePath?fixid=${fixtureid}`);
  }
  PosthighScore(data) {
    return this.apiClient.post('CricketScore/PostManOfMatch', data);
  }
  postimage(formData, config) {
    return this.apiClient.post(`Team/UploadImage`, formData, config);
  }
  postCricketimages(formData, config) {
    return this.apiClient.post(`Scoring/UploadImage`, formData, config);
  }
  fetchgoals(Fixtureid) {
    return this.apiClient.get(`Scoring/MatchScores?fixtureid=${Fixtureid}`);
  }
  fetchuserdata(regno) {
    return this.apiClient.get(`Players/GetUserTeams?regno=${regno}`);
  }
  fetchuserScore(regno, value1) {
    return this.apiClient.get(
      `TopPerformer/Getplayerrunsbymatches?regNo=${regno}&sessionId=${value1}`,
    );
  }
  fetchGistAdmin(value1) {
    return this.apiClient.get(
      `TopPerformer/sessionGistforAdmin?sessionId=${value1}`,
    );
  }
  fetchEvents(fixtureid) {
    return this.apiClient.get(
      `MatchEvents/getMatchEvents?matchId=${fixtureid}`,
    );
  }
  fetchCricketFixtures() {
    return this.apiClient.get(`CricketScore/GetFixtures`);
  }
  //------------tasks functions
  fetchCricketmatches(id) {
    return this.apiClient.get(`CricketScore/getfixturesteams?id=${id}`);
  }
  fetchCricketmatches(id) {
    return this.apiClient.get(`CricketScore/getfixturesteams?id=${id}`);
  }
  fetchballDetails(id1, id2) {
    return this.apiClient.get(
      `CricketScore/Getdeliverydetails?fixid=${id1}&score=${id2}`,
    );
  }
  fetchwicketdetails(id1, id2) {
    return this.apiClient.get(
      `CricketScore/GetwicketDEtails?fixid=${id1}&wickettype=${id2}`,
    );
  }
  Endturnbasematch(payload) {
    return this.apiClient.put('Scoring/AddTurnBaseWinner', payload);
  }
}

export default new Api();
