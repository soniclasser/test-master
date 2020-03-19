export interface StyleSelect{
  id: number;
  name: string;
  type: string;
  attributes: {
    id: number;
    cols: string;
    style: string;
  },
  options: object[];
  tag: string;
}
