import React from "react";
import {connect} from "react-redux";
import {startRemoveExpense, startEditExpense, startGetExpenses} from "../actions/expenses";
import {Expense} from "../types/Expense";
import {AppState} from "../store/configureStore";
import {bindActionCreators} from "redux";
import {AppActions} from "../types/actions";
import {ThunkDispatch} from "redux-thunk";

interface HomePageProps {
  id?: string;
  color?: string;
}

interface HomePageState {
}

type Props = HomePageProps & LinkStateProps & LinkDispatchProps;

export class HomePagePage extends React.Component<Props, HomePageState> {
  
  getData = () => {
    this.props.startGetExpenses();
  }
  
  onEdit = (expense: Expense) => {
    this.props.startEditExpense(expense);
  };
  onRemove = (id: string) => {
    this.props.startRemoveExpense(id);
  };
  
  render() {
    const {expenses} = this.props;
    return (
        <div>
          <h1>Expense Page</h1>
          <div>
            {expenses.map(expense => (
                <div key={expense.id}>
                  <p>{expense.description}</p>
                  <p>{expense.amount}</p>
                  <p>{expense.note}</p>
                  <button onClick={() => this.onRemove(expense.id)}>
                    Remove Expense
                  </button>
                  <button onClick={() => this.onEdit(expense)}>Edit Expense</button>
                
                </div>
            ))}
          </div>
          <button onClick={() => this.getData()}>Edit Expense</button>
        </div>
    );
  }
}

interface LinkStateProps {
  expenses: Expense[];
}

interface LinkDispatchProps {
  startEditExpense: (expense: Expense) => void;
  startRemoveExpense: (id: string) => void;
  startGetExpenses: () => void;
}

const mapStateToProps = (
    state: AppState,
    ownProps: HomePageProps
): LinkStateProps => ({
  expenses: state.expenses
});

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: HomePageProps
): LinkDispatchProps => ({
  startEditExpense: bindActionCreators(startEditExpense, dispatch),
  startRemoveExpense: bindActionCreators(startRemoveExpense, dispatch),
  startGetExpenses: bindActionCreators(startGetExpenses, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePagePage);
