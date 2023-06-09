export const matchActionType = {
  SET_MATCH: 'SET_MATCH',
  START_MATCH: 'START_MATCH',
  UPDATE_SCORE: 'UPDATE_SCORE',
  END_MATCH: 'END_MATCH'
};

export const matchInitailState: MatchStateType = {
  teamOne: '',
  teamTwo: '',
  teamOneScore: 0,
  teamTwoScore: 0,
  isMatchStarted: false,
  isMatchEnded: false,
  winner: function () {
    if (this.teamOneScore > this.teamTwoScore) {
      return this.teamOne;
    } else if (this.teamOneScore < this.teamTwoScore) {
      return this.teamTwo;
    } else {
      return 'Draw';
    }
  }
};

export type MatchStateType = {
  teamOne: string;
  teamTwo: string;
  teamOneScore: number;
  teamTwoScore: number;
  isMatchStarted: boolean;
  isMatchEnded: boolean;
  winner: () => string;
};
