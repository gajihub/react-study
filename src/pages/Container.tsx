import * as React from "react";
import { connect } from "react-redux";
import { setSelected } from "../redux/actions/appActions";
import styles from "@styles/pages/Container.module.scss";

interface EmailContainerProps {
  selected: string;
  setSelected: (selected: string) => void;
}

const Container: React.FC<EmailContainerProps> = ({
  selected,
  setSelected
}) => {
  const renderContent = () => {
    switch (selected) {
      case "basic":
        return <p>Basic Email Content</p>;
      case "write":
        return <p>Write Email Content</p>;
      case "mesend":
        return <p>Message Send Email Content</p>;
      case "replay":
        return <p>Replay Email Content</p>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <div>
            <button onClick={() => setSelected("basic")}>Basic</button>
            <button onClick={() => setSelected("write")}>Write</button>
            <button onClick={() => setSelected("mesend")}>Message Send</button>
            <button onClick={() => setSelected("replay")}>Replay</button>
          </div>
          {renderContent()}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: { app: { selected: string } }) => ({
  selected: state.app.selected
});

export default connect(mapStateToProps, { setSelected })(Container);
