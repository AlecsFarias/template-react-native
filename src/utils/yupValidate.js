import * as yup from 'yup';

const yupValidate = async (schema, data, options = {}) => {
  try {
    const validateOptions = {
      abortEarly: false,
      stripUnknown: true,
      ...options,
    };

    const result = await schema.validate(data, validateOptions);

    return {
      success: true,
      data: result,
      errors: {},
    };
  } catch (errors) {
    const validationErrors = {};

    errors.inner.forEach((error) => {
      validationErrors[error.path] = error.message.replace(
        error.field,
        yup.reach(schema, error.field).describe().label,
      );
    });

    return {
      success: false,
      data: {},
      errors: validationErrors,
    };
  }
};

export default yupValidate;
