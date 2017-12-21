import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Market extends Model<Market> {
  @Column
  exchange: string;

  @Column
  coin: string;

  @Column(DataType.FLOAT)
  value: number;

  @Column(DataType.STRING)
  updated: number;
}
