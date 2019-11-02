import { ILabel } from './label';
import { IIsueType } from './isue-type';
import { IUser } from './user';

export interface ITask {
  id: string;
  assignee: IUser;
  title: string;
  description: string;
  deadline: string;
  label: ILabel;
  reporter: IUser;
  type: IIsueType;
}
