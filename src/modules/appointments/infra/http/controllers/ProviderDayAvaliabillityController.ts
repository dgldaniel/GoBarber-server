import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvaliabillityService from '@modules/appointments/services/ListProviderDayAvaliabillityService';

export default class ProviderMonthAvaliabillityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year, day } = request.body;

    const listProviderDayAvaliabillity = container.resolve(
      ListProviderDayAvaliabillityService,
    );

    const availabillity = await listProviderDayAvaliabillity.execute({
      provider_id,
      month,
      year,
      day,
    });

    return response.json(availabillity);
  }
}
