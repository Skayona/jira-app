import { ILabel } from './label';
import { IIsueType } from './isue-type';

export interface ITask {
  id: string;
  assigned: string;
  title: string;
  description: string;
  deadline: string;
  label: ILabel;
  reporter: string;
  type: IIsueType;
}
