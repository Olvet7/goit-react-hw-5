import { Formik, Form, Field } from "formik";
import { useSearchParams } from "react-router-dom";
import css from "./SearchBar.module.css";

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
      <Form className={css.form}>
        <Field name="queryParam"></Field>
        <button type="submit" className={css.btn}>Find</button>
      </Form>
    </Formik>
  );
}
