import { FormWrapper, Form, Input, Button } from './SearchMovie.styled';

export default function SearchMovie({ title, onChange, onSubmit }) {
  return (
    <FormWrapper>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          name="title"
          autoComplete="off"
          value={title}
          onChange={onChange}
          autoFocus
        />
        <Button type="submit">Search</Button>
      </Form>
    </FormWrapper>
  );
}
