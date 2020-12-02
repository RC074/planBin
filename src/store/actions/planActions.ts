import { planState } from "../reducers/planReducer";

export interface actionType {
  type: string;
  plan: planState;
}

export const createPlan = (plan: planState) => {
  // return (dispatch: any, getState: any) => {
  //   dispatch({ type: "CREATE_PLAN", plan });
  // };
  return { type: "CREATE_PLAN", plan };
};
