export default function FormInput({setter, value}) {
  return (
    <input
      className='p-1 text-black'
      type='text'
      value={value}
      onChange={e => setter(e.target.value)}
    />
  );
}
