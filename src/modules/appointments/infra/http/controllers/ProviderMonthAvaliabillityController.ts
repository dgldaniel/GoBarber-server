import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderMonthAvaliabillityService from '@modules/appointments/services/ListProviderMonthAvaliabillityService';

export default class ProviderMonthAvaliabillityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.body;

    const listProviderMonthAvaliabillity = container.resolve(
      ListProviderMonthAvaliabillityService,
    );

    const availabillity = await listProviderMonthAvaliabillity.execute({
      provider_id,
      month,
      year,
    });

    return response.json(availabillity);
  }
}
