import { toast } from 'react-hot-toast';
import { ApiErrors, ApiResponse, ApiValidationException } from '../../types';
import { isAxiosError } from '../../types/guards';
import { useTranslation } from 'react-i18next';

export interface AsyncState<T, E = unknown> {
  payload?: T;
  loading: boolean;
  errors?: E[];
}
export const retrieveErrorResponse = (e: unknown): ApiErrors[] | undefined => {
  if (isAxiosError<ApiResponse<unknown>>(e)) {
    return e?.response?.data.errors;
  }
  return undefined;
};

export const toastErrors = (errors: ApiErrors[], t: (key: unknown[] | string) => string) => {
  for (const e of errors) {
    if ((e as ApiValidationException)?.field === 'password') {
      toast.error(t('invalid-password'));
    } else {
      toast.error(e.message);
    }
  }
}
