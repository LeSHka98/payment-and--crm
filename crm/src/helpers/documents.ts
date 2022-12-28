export const downloadFile = (downloadUrl: string, fileText: string) => {
  const link = document.createElement('a');

  link.href = downloadUrl;
  link.download = fileText;
  document.body.append(link);
  link.click();
  link.remove();
};
