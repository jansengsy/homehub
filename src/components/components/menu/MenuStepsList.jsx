export default function MenuStepsList({ steps }) {
  return (
      <div className='w-full overflow-scroll'>
        <ul>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
            ))}
        </ul>
      </div>
  );
}
