import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'Ted',
  password: '6045',
  database: 'board_app',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
