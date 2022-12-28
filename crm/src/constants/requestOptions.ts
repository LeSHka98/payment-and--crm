// helpers
import { getFromLocalStorage } from 'helpers/localStorage';

export const DOWNLOAD_FILE_OPTIONS = {
  headers: {
    AuthUser: getFromLocalStorage('token') || '',
  },
};
