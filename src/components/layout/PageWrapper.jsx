export default function PageWrapper({children}) {
  return (
    <div className="bg-gray-800 m-0 w-full h-full p-4">
      {children}
    </div>
  );
}
