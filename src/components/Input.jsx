export default function Input({ type, placeholder, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete="off"
      className="px-4 py-4 text-gray-400 bg-transparent border-2 border-red-600 rounded-lg md:min-w-[400px] min-w-[300px] outline-none"
    />
  );
}
