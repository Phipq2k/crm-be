import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('address_company')
export class AddressCompanyEntity {
  @PrimaryGeneratedColumn('identity', {
    type: 'int',
  })
  address_company_id: number;

  @Column({
    type: 'text',
  })
  name: string;

  @Column({
    type: 'text',
  })
  lat: string;

  @Column({
    type: 'text',
  })
  lng: string;

  @Column({
    type: 'int',
  })
  status: number;

  @Column({
    type: 'timestamp',
  })
  timestamp: Date;
}
