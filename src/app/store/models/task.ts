import { ILabel } from './label';

export interface ITask {
  id: string;
  assigned: string;
  title: string;
  description: string;
  deadline: string;
  label: ILabel;
}
