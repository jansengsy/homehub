import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id='error-page' className='flex h-screen'>
      <div className='m-auto'>
        <div className='text-center space-y-2'>
          <h1 className='text-2xl font-bold'>Oops!</h1>
          <p className='font-bold'>Sorry, an unexpected error has occurred:</p>
          <p className='italic'>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
        <div className='text-center mt-8 underline'>
          <a className='hover:font-bold' href='/'>Take me home!</a>
        </div>
      </div>
    </div>
  );
}