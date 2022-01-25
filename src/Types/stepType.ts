export interface Step {
  name: string | null;
  number: number | null;
  active: boolean;
  indicatorTo: boolean;
}

export interface UpdateStepObj {
  active: boolean;
  indicatorTo: boolean;
  number: number;
}