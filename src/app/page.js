import LocalizedHomePage from './[locale]/page';

export default async function RootPage() {
  return <LocalizedHomePage params={Promise.resolve({ locale: 'fr' })} />;
}
