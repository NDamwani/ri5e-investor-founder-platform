export default function Input({ label, type, id }) {
  return (
    <div>
      <label htmlFor={id} className="block text-2xl">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={label}
        className="p-2 my-2 w-full border-gray-300 rounded-md bg-accent"
      />
    </div>
  );
}
