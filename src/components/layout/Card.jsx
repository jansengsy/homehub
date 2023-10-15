export default function Card({ children, click }) {
  return (
    <a
      onClick={click}
      className='w-full p-2 shadow-md lg:max-w-lg bg-gray-700 text-white focus:outline-none hover:bg-gray-600 cursor-pointer'
    >
      {children}
    </a>
  );
}
