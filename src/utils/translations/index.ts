import { useIntl } from 'react-intl';

export const translation = (
  id: string,
  values?: Record<string, any>,
): string => {
  const intl = useIntl();

  return intl.formatMessage({ id }, values);
};
