import AuthForm from '@/components/auth-form';

export default async function Home({searchParams}) {
  const { mode } = await searchParams;
  console.log('Home', mode);
  return <AuthForm mode={mode || 'login'} />;
}
