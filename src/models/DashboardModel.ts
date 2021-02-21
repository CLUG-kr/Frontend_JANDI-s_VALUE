export interface IProfile {
  username: string;
  profile_img_url: string;
}

export type TendencyType = '새벽' | '아침' | '낮' | '밤';

export interface ITendency {
  type: TendencyType;
}

export interface IAnalytics {
  contribution: IAnalyticsAsContribution[];
  day: IAnalyticsAsDay[];
  language: IAnalyticsAsLanguage[];
  time: IAnalyticsTime[];
}

export interface IAnalyticsAsLanguage {
  language: string;
  value: number;
}

export interface IAnalyticsAsDay {
  day: string;
  value: number;
}

export interface IAnalyticsTime {
  time: string;
  value: number;
}

export interface IAnalyticsAsContribution {
  username: string;
  value: number;
}

export interface IHistory {
  today: number;
  yesterday: number;
  weekAgo: number;
}

export interface IDashboardData {
  repository: string;
  profile: IProfile;
  history: IHistory;
  tendency: ITendency;
  analytics: IAnalytics;
}
