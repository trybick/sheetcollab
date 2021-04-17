export type AddSheetData = {
  artist: string;
  notes?: string;
  title: string;
  year?: string;
};

const yearRegex = /^\d{4}$/;

export const addSheetSchema = {
  artist: { required: 'Artist is required' },
  notes: {},
  title: { required: 'Title is required' },
  year: {
    pattern: { value: yearRegex, message: 'Not a valid year' },
  },
};
