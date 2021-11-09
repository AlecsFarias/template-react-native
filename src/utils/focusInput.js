function focusInput(field, formRef) {
  const focusInputField = formRef.current.getFieldRef(field);

  if (typeof focusInputField.focus === 'function') {
    focusInputField.focus();
  } else {
    focusInputField.getElement().focus();
  }
}

export default focusInput;
