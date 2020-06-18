import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import ProvidersController from '../controllers/ProvidersController';
import ProviderDayAvaliabillityController from '../controllers/ProviderDayAvaliabillityController';
import ProviderMonthAvaliabillityController from '../controllers/ProviderMonthAvaliabillityController';

const providersRouter = Router();

const providersController = new ProvidersController();
const providerDayAvaliabillityController = new ProviderDayAvaliabillityController();
const providerMonthAvaliabillityController = new ProviderMonthAvaliabillityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);
providersRouter.get(
  '/:provider_id/month-availabillity',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerDayAvaliabillityController.index,
);
providersRouter.get(
  '/:provider_id/day-availabillity',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerMonthAvaliabillityController.index,
);

export default providersRouter;
