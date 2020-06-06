import { container } from 'tsyringe';

import '@modules/users/providers';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppoimentsRepository';
import AppoimentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUserRepository';
import UsersRepository from '@modules/users/infra/repositories/UserRepository';

container.registerSingleton<IAppointmentsRepository>(
  'AppoimentsRepository',
  AppoimentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
