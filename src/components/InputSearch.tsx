type InputSearchProps = {
  name: string;
  id: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputSearch = ({ name, id, placeholder, onChange }: InputSearchProps) => {
  return (
    <input
      type="text"
      name={name}
      id={id}
      placeholder={placeholder}
      className="w-10/12 h-9 px-3 placeholder-gray-400 border rounded-lg focus:shadow-outline shadow-xl lg:w-6/12"
      onChange={onChange}
    />
  );
};

export default InputSearch;
