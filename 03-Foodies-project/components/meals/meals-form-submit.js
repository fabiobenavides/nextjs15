'use client';

import { useFormState } from "react-dom";

export default function MealsFormSubmit() {

  const { pending } = useFormState();

  return (
    <button>
        { pending ? 'Submitting...' : 'Share Meal' }
    </button>
  )
}
