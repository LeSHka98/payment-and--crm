// constants
import { DOWNLOAD_FILE_OPTIONS } from 'constants/requestOptions';
// helpers
import { handleResponse } from 'helpers/handleRequest';

export const sendRequest = async (url: string) => {
  const response = await fetch(url, DOWNLOAD_FILE_OPTIONS);

  return handleResponse(response);
};
