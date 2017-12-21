import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Market extends Model<Market> {
  @Column
  exchange: string;

  @Column
  coin: string;

  @Column
  value: number;

  @Column
  updated: number;
}
