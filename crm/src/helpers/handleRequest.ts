// constants
import { REQUEST_STATUSES } from 'constants/requestStatuses';
import { REQUEST_MESSAGES } from 'constants/requestMessages';

const contentTypes = {
  json: 'application/json',
  pdf: 'application/pdf',
  text: 'text/plain',
};

export const getUrlAndFileText = (blob: globalThis.Blob, fileName: string) => {
  const downloadUrl = URL.createObjectURL(blob);
  const fileText = fileName.split('"')[1];

  return { downloadUrl, fileText };
};

const getFileData = async (response: Response) => {
  const blob = await response.blob();
  const fileName = response.headers.get('content-disposition');

  return getUrlAndFileText(blob, fileName);
};

const handleSucceedResponse = (response: Response) => {
  const contentType = response.headers.get('content-type');

  if (contentType === contentTypes.json) {
    return response.json();
  }
  if (contentType === contentTypes.pdf) {
    return getFileData(response);
  }

  return response.text();
};

export const handleResponse = (response: Response) => {
  if (response.status === REQUEST_STATUSES.success) {
    return Promise.resolve(handleSucceedResponse(response));
  }

  return Promise.reject(new Error(REQUEST_MESSAGES.error));
};
