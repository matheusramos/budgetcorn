/* @flow */
import React from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { Form as FormikForm, withFormik } from 'formik';
import CurrencyInput from 'react-currency-input';
import { object as YupObject, string as YupString, number as YupNumber } from 'yup';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import type { FormikBag } from 'formik';
import type { ContextRouter } from 'react-router-dom';

import Grid from './commons/Grid';
import TransactionFactor from './commons/TransactionFactor';
import CategoryPicker from './commons/CategoryPicker';
import CircleButton from './commons/CircleButton';
import { toDateInputString } from '../utils/date';
import type { Transaction } from '../ducks/transaction/flow';
import type { Category } from '../utils/flow';

type Props = {
  categories: Category[],
  onSubmit: (transaction: $Shape<Transaction>) => Promise<void>,
} & ContextRouter;

const CloseButtonDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const Form = (props: FormikBag<Props>) => {
  const {
    categories,
    dirty,
    errors,
    isSubmitting,
    handleBlur,
    handleChange,
    touched,
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
    <Grid>
      <div className='box'>
        <FormikForm>
          <CloseButtonDiv className='field'>
            <CircleButton
              type='button'
              className='button is-inverted has-text-grey'
              onClick={() => props.history.push('/')}
            >
              <Icon icon='times' />
            </CircleButton>
          </CloseButtonDiv>
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
                className={classnames(
                  'input',
                  'is-large',
                  'has-text-right',
                  errors.amount && touched.amount && 'is-danger',
                )}
                autoFocus
                onBlur={handleBlur}
                onChangeEvent={handleChange}
                value={values.amount}
              />
            </div>
            {errors.amount && touched.amount && <p className='help is-danger'>{errors.amount}</p>}
          </div>
          <div className='field'>
            <label htmlFor='description'>
              <span className='is-sr-only'>Description</span>
              <div className='control'>
                <input
                  className={classnames(
                    'input',
                    errors.description && touched.description && 'is-danger',
                  )}
                  type='text'
                  name='description'
                  placeholder='Enter a description'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.description}
                />
              </div>
              {errors.description && touched.description && (
                <p className='help is-danger'>{errors.description}</p>
              )}
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
      </div>
    </Grid>
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
  validationSchema: YupObject().shape({
    description: YupString().required(
      'You need to fill the description so you remember what is it about',
    ),
    amount: YupNumber().moreThan(0, 'Hmmn... this value should be greater than zero'),
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
})(withRouter(Form));
