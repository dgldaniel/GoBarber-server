// import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

import ListProviderDayAvaliabillityService from './ListProviderDayAvaliabillityService';

let listProviderDayAvaliabillity: ListProviderDayAvaliabillityService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;

describe('ListProviderDayAvaliabillity', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderDayAvaliabillity = new ListProviderDayAvaliabillityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the day availabillity from provider', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 20, 8, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 20, 10, 0, 0),
    });

    const availabillity = await listProviderDayAvaliabillity.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
      day: 20,
    });

    expect(availabillity).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 9, available: true },
        { hour: 10, available: false },
        { hour: 11, available: true },
      ]),
    );
  });
});
