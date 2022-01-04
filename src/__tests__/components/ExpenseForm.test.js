import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import ExpenseForm from '../../components/ExpenseForm';

const title = 'Test expense';
const date = '2021-08-01';
const handleChange = jest.fn(() => {});
const submitAction = jest.fn(() => {});

describe('Snapshot of the expense form component', () => {
  it('should render correctly for creating a new expense', () => {
    const tree = renderer
      .create(
        <ExpenseForm
          title={title}
          amount=""
          date={date}
          notes=""
          setter={handleChange}
          submit={submitAction}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly for editing an expense', () => {
    const tree = renderer
      .create(
        <ExpenseForm
          id={2}
          title={`Updated ${title}`}
          amount={85}
          date={date}
          notes="Adding notes this time"
          setter={handleChange}
          submit={submitAction}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
