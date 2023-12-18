import { useSelector } from "react-redux";
import { Button, Input, List, ListItem } from "@mui/material";
import { SyncAlt } from "@mui/icons-material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "@styles/components/EmailWrite.module.scss";

const EmailWrite = () => {
  const mailType = useSelector((store: any) => store.emailReducer.wirteType);
  return (
    <>
      <div className={styles.writeWrap}>
        {mailType === "write" && (
          <>
            <div className={styles.title}>메일쓰기</div>
          </>
        )}

        {mailType === "tome" && (
          <>
            <div className={styles.title}>내게쓰기</div>
          </>
        )}

        <List className={styles.topButton}>
          <ListItem>
            <Button variant="text" className={styles.sendBtn}>
              보내기
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="text" className={styles.preBtn}>
              미리보기
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="text" className={styles.tomeBtn}>
              <SyncAlt />
              내게쓰기
            </Button>
          </ListItem>
        </List>
        <div className={styles.mailInfo_option}>
          <div className={styles.receiver}>
            <span>받는 사람</span>
            <Input
              inputProps={{
                "aria-labelledby": "받는사람"
              }}
            />
          </div>
          <div className={styles.reference}>
            <span>참조</span>
            <Input
              inputProps={{
                "aria-labelledby": "참조"
              }}
            />
          </div>
          <div className={styles.subject}>
            <span>제목</span>
            <Input
              inputProps={{
                "aria-labelledby": "제목"
              }}
            />
          </div>
        </div>
        <div className={styles.editorBox}>
          <ReactQuill style={{ height: "551px" }} />
        </div>
      </div>
    </>
  );
};

export default EmailWrite;
