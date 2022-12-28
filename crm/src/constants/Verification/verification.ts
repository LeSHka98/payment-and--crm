export const VERIFICATION_TABLE_HEAD = [
  'Наименование документа',
  'Дата',
  'Скачать',
];

export type CrmGatewayQuery = {
  mainPage: MainPage
};

export type MainPage = {
  documentWidget: Documents
};

type Documents = {
  documents: Document[],
};

export type Document = {
  agreementDate: Date,
  agreementType: string,
  documentFileId: string,
};
