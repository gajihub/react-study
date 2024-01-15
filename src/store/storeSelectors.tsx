import { useSelector } from "react-redux";
import { RootState } from "@store/email";

export const useStoreSelector = () => {
  const selectEmailType = useSelector(
    (state: RootState) => state.emailReducer.writeType
  );
  const selectImportant = useSelector(
    (state: RootState) => state.emailReducer.importantEmails
  );
  const selectEmailState = useSelector(
    (state: RootState) => state.emailReducer.readCheckEamils
  );

  const selectListState = useSelector(
    (state: RootState) => state.emailReducer.listType
  );

  return {
    selectImportant,
    selectEmailState,
    selectEmailType,
    selectListState
  };
};
