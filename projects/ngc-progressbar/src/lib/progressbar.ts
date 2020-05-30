export interface Progressbar {
  // parent element height width calc with js for responsive
  parentElemnent: {
    width: number;
    height: number;
  };

  backgroundColor?: string;
  progressBarType: string;
  progressBarValue: number;
  progressBarId: string;

  styles?: {
    progressBarRadius: number;
    barStyles: {
      color: string;
      width: number;
      style: any;
    };
    baseStyles: {
      color: string;
      width: number;
      style: any;
    };
    textStyles: {
      fontSize: number;
      color: string;
      position: string;
      html: string;
    };
  };
}
