export interface INewTask {
  text: string;
  description: string;
}
export interface ITask extends INewTask {
  id: number;
}
export interface IButton {
  title: string;
  class: string;
}
