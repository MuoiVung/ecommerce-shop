import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, InputAdornment } from "@mui/material";
import { StyledTextField } from "@styles/shared/CustomForm.style";

import { ReactNode } from "react";
import { DeepPartial, SubmitHandler, useForm } from "react-hook-form";

import * as yup from "yup";

type FormData = Record<string, unknown> & {
  [key: string]: string;
};

export type FormFieldProps = {
  name: keyof FormData;
  label: string;
  type: string;
  required?: boolean;
  inputAdornment?: ReactNode;
};

interface Props<T extends FormData> {
  onSubmitForm: SubmitHandler<T>;
  defaultValues: DeepPartial<T>;
  validationSchema: yup.AnyObjectSchema;
  fields: FormFieldProps[];
  children?: ReactNode;
  onClickIcon?: () => void;
}

export const CustomForm = <T extends FormData>({
  defaultValues,
  fields,
  validationSchema,
  onSubmitForm,
  children,
  onClickIcon,
}: Props<T>) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<T>({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues,
  });

  const submitForm = async (data: T) => {
    try {
      await onSubmitForm(data);
      reset();
    } catch (error) {}
  };

  return (
    <Box component="form" onSubmit={handleSubmit(submitForm)}>
      {fields.map((field) => (
        <StyledTextField
          variant="filled"
          key={field.name}
          label={field.label}
          type={field.type}
          required={field.required}
          error={errors[field.name] ? true : false}
          helperText={errors[field.name]?.message as any}
          autoComplete="true"
          {...register(field.name.toString() as any)}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button onClick={onClickIcon}>{field.inputAdornment}</Button>
              </InputAdornment>
            ),
          }}
        />
      ))}
      <Box mt="24px">{children}</Box>
    </Box>
  );
};
