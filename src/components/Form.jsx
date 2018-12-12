/* @flow */
import React, { Fragment } from 'react';
import { Form as FormikForm, withFormik } from 'formik';
import CurrencyInput from 'react-currency-input';
import { object as YupObject, string as YupString, number as YupNumber } from 'yup';

import type { FormikBag } from 'formik';

import TransactionFactor from './commons/TransactionFactor';
import CategoryPicker from './commons/CategoryPicker';
import { toDateInputString } from '../utils/date';
import type { Transaction } from '../ducks/transaction/flow';
import type { Category } from '../utils/flow';

type Props = {
  categories: Category[],
  onSubmit: (transaction: $Shape<Transaction>) => Promise<void>,
};

const Form = (props: FormikBag<Props>) => {
  const {
    categories,
    dirty,
    errors,
    isSubmitting,
    handleBlur,
    handleChange,
    // touched,
    values,
  } = props;
  const hasError = Object.keys(errors).length > 0;

  const handleFactorChange = (factor: number) => {
    props.setFieldValue('factor', factor);
  };

  const handleCategoryChange = (category: string) => {
    props.setFieldValue('category', category);
  };

  return (
    <Fragment>
      <FormikForm>
        <div className='field'>
          <label htmlFor='date' className='label'>
            <span className='is-sr-only'>Date</span>
            <div className='control'>
              <input
                className='input'
                type='date'
                name='date'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date}
              />
            </div>
          </label>
        </div>
        <div className='field'>
          <div className='control'>
            <TransactionFactor onChange={handleFactorChange} factor={values.factor} />
          </div>
        </div>
        <div className='field'>
          <span className='is-sr-only'>Amount</span>
          <div className='control'>
            <CurrencyInput
              name='amount'
              className='input is-large has-text-right'
              autoFocus
              onBlur={handleBlur}
              onChangeEvent={handleChange}
              value={values.amount}
            />
          </div>
        </div>
        {/* </label> */}
        <div className='field'>
          <label htmlFor='description' className='sr-only'>
            <span className='is-sr-only'>Description</span>
            <div className='control'>
              <input
                className='input'
                type='text'
                name='description'
                placeholder='Enter a description'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
              />
            </div>
          </label>
        </div>
        <div className='field'>
          <div className='control'>
            <CategoryPicker
              onChange={handleCategoryChange}
              categories={categories}
              value={values.category}
            />
          </div>
        </div>
        <button
          className='button is-primary is-fullwidth is-large'
          type='submit'
          disabled={isSubmitting || !dirty || !!hasError}
        >
          Save
        </button>
      </FormikForm>
    </Fragment>
  );
};

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: ({ transaction }) => {
    if (!transaction) {
      return {
        amount: 0,
        category: 'Other',
        date: toDateInputString(),
        description: '',
        factor: -1,
      };
    }
    return { ...transaction };
  },
  // TODO: yup error messages
  validationSchema: YupObject().shape({
    amount: YupNumber()
      .required('Required')
      .positive('ALALALLA')
      .moreThan(0, 'LALALALA'),
    category: YupString().required('Required'),
    date: YupString().required('Required'),
    description: YupString().required('Required'),
  }),
  handleSubmit: async (values, { props, setSubmitting }) => {
    try {
      const { amount, category, date, description, factor } = values;
      const transaction = {
        amount: factor * amount,
        category,
        description,
        date: new Date(date),
      };

      await props.onSubmit(transaction);
    } finally {
      setSubmitting(true);
    }
  },
})(Form);
