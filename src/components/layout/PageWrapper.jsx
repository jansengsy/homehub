export default function PageWrapper({children, style}) {
  return (
    <div className={`overflow-auto bg-gray-800 m-0 h-full p-4 ${style}`}>
      {children}
    </div>
  );
}
