import type { EntryFieldTypes } from 'contentful';

export type ContentfulRecap = {
  contentTypeId: 'recap';
  fields: {
    leagueId: EntryFieldTypes.Text;
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    author?: EntryFieldTypes.Symbol;
    body: EntryFieldTypes.RichText;
  };
};
