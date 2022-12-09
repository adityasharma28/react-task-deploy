import styles from "./card.module.scss";
import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
function Card({
  title,
  id,
  leftArrow,
  rightArrow,
  step,
  handleDelete,
  shiftLeft,
  shiftRight,
  search,
}) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__nav}>
          <div className={styles.card__nav__title}>{title}</div>
          <div className={styles.card__nav__btn}>
            {" "}
            <Button
              style={{
                color: "rgb(250,85,8)",
                fontWeight: "bold",
                textTransform: "none",
              }}
              onClick={() => {
                handleDelete(step, id);
              }}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </div>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__left}>
            {!leftArrow && !search && (
              <IconButton
                aria-label="delete"
                color="primary"
                size="large"
                onClick={() => {
                  shiftLeft(step, id);
                }}
              >
                <ArrowCircleLeftRoundedIcon />
              </IconButton>
            )}
          </div>
          <div className={styles.card__footer__right}>
            {!rightArrow && !search && (
              <IconButton
                aria-label="delete"
                color="primary"
                size="large"
                onClick={() => {
                  shiftRight(step, id);
                }}
              >
                <ArrowCircleRightRoundedIcon />
              </IconButton>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
