export type AddSheetData = {
  artist: string;
  notes?: string;
  title: string;
  year?: string;
};

export const addSheetSchema = {
  artist: { required: 'Artist is required' },
  notes: {},
  title: { required: 'Title is required' },
  year: {},
};
