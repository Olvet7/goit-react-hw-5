import { Formik, Form, Field } from "formik";
import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [params, setParams] = useSearchParams();

  const changeFilter = (newQuery) => {
    params.set("query", newQuery);
    setParams(params);
  };

  return (
    <Formik
      initialValues={{ queryParam: "" }}
      onSubmit={(values, actions) => {
        changeFilter(values.queryParam);
        actions.resetForm();
      }}
    >
      <Form>
        <Field name="queryParam"></Field>
        <button type="submit">Find</button>
      </Form>
    </Formik>
  );
}
