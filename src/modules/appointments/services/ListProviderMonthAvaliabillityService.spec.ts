// import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

import ListProviderMonthAvaliabillityService from './ListProviderMonthAvaliabillityService';

let listProviderMonthAvaliabillity: ListProviderMonthAvaliabillityService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;

describe('ListProviderMonthAvaliabillity', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvaliabillity = new ListProviderMonthAvaliabillityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the month availabillity from provider', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user_id',
      date: new Date(2020, 4, 20, 8, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user_id',
      date: new Date(2020, 4, 20, 9, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user_id',
      date: new Date(2020, 4, 20, 10, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user_id',
      date: new Date(2020, 4, 21, 8, 0, 0),
    });

    const availabillity = await listProviderMonthAvaliabillity.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
    });

    expect(availabillity).toEqual(
      expect.arrayContaining([
        { day: 19, available: true },
        { day: 20, available: false },
        { day: 21, available: false },
        { day: 22, available: true },
      ]),
    );
  });
});
