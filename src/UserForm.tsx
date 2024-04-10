import React, { FormEvent, useState } from "react";
import {
  FormTextArea,
  FormSelect,
  FormRadio,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormButton,
  Form,
  CheckboxProps,
  FormProps,
} from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const UserForm = () => {
  const [radioValue, setRadioValue] = useState<string | undefined>(undefined);

  const handleChange = (
    e: FormEvent<HTMLInputElement>,
    data: CheckboxProps
  ) => {
    console.log("handleChange", e, data);
    setRadioValue(data.value as string);
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    data: FormProps
  ) => {
    console.log("handleSubmit", event, data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup widths="equal">
        <FormInput fluid label="First name" placeholder="First name" />
        <FormInput fluid label="Last name" placeholder="Last name" />
        <FormSelect
          fluid
          label="Gender"
          options={options}
          placeholder="Gender"
        />
      </FormGroup>
      <FormGroup inline>
        <label>Size</label>
        <FormRadio
          label="Small"
          value="sm"
          checked={radioValue === "sm"}
          onChange={handleChange}
        />
        <FormRadio
          label="Medium"
          value="md"
          checked={radioValue === "md"}
          onChange={handleChange}
        />
        <FormRadio
          label="Large"
          value="lg"
          checked={radioValue === "lg"}
          onChange={handleChange}
        />
      </FormGroup>
      <FormTextArea label="About" placeholder="Tell us more about you..." />
      <FormCheckbox label="I agree to the Terms and Conditions" />
      <FormGroup inline>
        <FormButton primary>Primary</FormButton>
        <FormButton secondary>Secondary</FormButton>
        <FormButton basic>Basic</FormButton>
        <FormButton>Standard</FormButton>
      </FormGroup>
    </Form>
  );
};

export default UserForm;
