export interface Progressbar {
    parentElemnent: {
        width: number;
        height: number;
    };
    progressBarType: string;
    progressBarValue: number;
    progressBarId: string;
    canvasBackground?: string;
    progressBarRadius?: number;
    barStyles?: {
        color: string;
        lineWidth: number;
        style: any;
    };
    baseStyles?: {
        color: string;
        lineWidth: number;
        style: any;
    };
    textStyles?: {
        fontSize: number;
        fontFamily: string;
        color: string;
        position: string;
        html: string;
    };
}
