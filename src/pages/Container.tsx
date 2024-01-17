import { useSelector } from "react-redux";
import EmailBasic from "@components/EmailBasic";
import EmailWrite from "@components/EmailWrite";
import EmailList from "@components/EmailList";
import EmailImportList from "@components/EmailImportList";
import styles from "@styles/pages/Container.module.scss";

const Container = () => {
  const emailSelected = useSelector((store: any) => store.emailReducer.seleted);

  return (
    <>
      <div className={styles.container}>
        {emailSelected === "basic" && <EmailBasic />}
        {emailSelected === "write" && <EmailWrite />}
        {emailSelected === "list" && <EmailList />}
        {emailSelected === "imlist" && <EmailImportList />}
      </div>
    </>
  );
};

export default Container;
