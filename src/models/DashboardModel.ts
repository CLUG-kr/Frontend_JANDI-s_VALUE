export interface IProfile {
  username: string;
  profile_img_url: string;
}

export type TendencyType = '새벽' | '아침' | '낮' | '밤';

export interface ITendency {
  type: TendencyType;
}

export interface IAnalytics {
  contribution: any;
  day: any;
  language: any;
  time: any;
}

export interface IDashboardData {
  profile: IProfile;
  tendency: ITendency;
  analytics: IAnalytics;
}
