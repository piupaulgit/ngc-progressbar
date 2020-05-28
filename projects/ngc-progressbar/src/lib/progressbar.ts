export interface Progressbar {
  parentElemnent: {
    width: number;
    height: number;
  };
  progressBarType: string;
  progressBarValue: number;
  progressBarId: string;
  progressBarStyles?: {
    barStyles: {
      color: string;
      width: number;
      style: any;
    };
    baseStyles: {};
    textStyles: {};
  };
}
