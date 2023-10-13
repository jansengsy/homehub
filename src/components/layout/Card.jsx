export default function Card({ children }) {
  return (
    <div className={'flex flex-col justify-between w-full h-64 p-2 shadow-md hover:shadow-gray-600 lg:max-w-lg bg-gray-600 text-white'}>
      {children}
    </div>
  );
}
