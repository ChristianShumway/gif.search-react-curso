import { useState, type ChangeEvent, type FormEvent } from "react";

// interface Props {
//   setCategories: React.Dispatch<React.SetStateAction<string[]>>;
// }

interface AddCategoryProps {
  onNewCategory: (value: string) => void;
}

export const AddCategory = ({onNewCategory}: AddCategoryProps) => {

  const [inputValue, setInputValue] = useState('');

  const onChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  }

  const onSubmitInput = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValueTrim = inputValue.trim();
    if (inputValueTrim.length <= 1) return;
    // setCategories( (categories: string[]) => [inputValue, ...categories] );
    onNewCategory(inputValueTrim)
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmitInput }>
      <input
        type="text"
        value={ inputValue }
        onChange={ onChangeInput }
        placeholder="Buscar..."
      />
    </form>
  )
}
