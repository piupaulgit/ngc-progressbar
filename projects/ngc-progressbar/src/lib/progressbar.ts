export interface Progressbar {
  // parent element height width calc with js for responsive
  parentElemnent: {
    width: number;
    height: number;
  };

  // main canvas styling
  progressBarType: string;
  progressBarValue: number;
  progressBarId: string;
  canvasBackground?: string;
  progressBarRadius?: number;

  // parcentage bar stying
  barStyles?: {
    color: string;
    width: number;
    style: any;
  };

  // base bar styling
  baseStyles?: {
    color: string;
    width: number;
    style: any;
  };

  // text styling
  textStyles?: {
    fontSize: number;
    color: string;
    position: string;
    html: string;
  };
}
