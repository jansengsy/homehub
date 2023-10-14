export default function Grid({children}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full my-2'>
      {children}
    </div>
  );
}
