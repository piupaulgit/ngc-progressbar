export interface Progressbar {
  progressBarType: string;
  progressBarValue: number;
  progressBarId: string;
  progressBarStyles?: {
    barStyles: {
      color: string;
      width: number;
    };
    baseStyles: {};
    textStyles: {};
  };
}
