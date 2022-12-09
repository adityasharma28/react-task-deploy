import styles from "./main.module.scss";
import React from "react";
import { useState, useEffect } from "react";
import Search from "../../component/search/search";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import AddTask from "../../component/addTask/addTask";
import Card from "../../component/card/card";
import { AlertTitle } from "@mui/material";
function Main() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState([], [], [], []);
  const [render, setRender] = useState(false);
  const [search, setSearch] = useState("");
  const [searchedValue, setSearchedValue] = useState([], [], [], []);
  const handleDelete = (steps, id) => {
    setStep((element) => {
      element[steps - 1] =
        element[steps - 1] && element[steps - 1].length
          ? element[steps - 1].filter((elem, index) => {
              return index != id;
            })
          : [];
      return element;
    });
    setRender((elem) => !elem);
  };
  const shiftRight = (steps, id) => {
    setStep((element) => {
      const title = element[steps - 1];
      element[steps] =
        step[steps] && step[steps].length
          ? [...step[steps], title[id]]
          : [title[id]];
      element[steps - 1] =
        element[steps - 1] && element[steps - 1].length
          ? element[steps - 1].filter((elem, index) => {
              return index != id;
            })
          : [];
      return element;
    });
    setRender((elem) => !elem);
  };
  const shiftLeft = (steps, id) => {
    setStep((element) => {
      const title = element[steps - 1];
      element[steps - 2] =
        step[steps - 2] && step[steps - 2].length
          ? [...step[steps - 2], title[id]]
          : [title[id]];
      element[steps - 1] =
        element[steps - 1] && element[steps - 1].length
          ? element[steps - 1].filter((elem, index) => {
              return index != id;
            })
          : [];
      return element;
    });
    setRender((elem) => !elem);
  };
  useEffect(() => {
    console.log(search);
    setSearchedValue((elem) => {
      elem = [[], [], [], []];
      const regex = new RegExp(search, "i");
      [0, 1, 2, 3].forEach((i) => {
        elem[i] =
          step[i] &&
          step[i].length &&
          step[i].filter(
            (element) => search.toLowerCase() == element.toLowerCase()
          );
      });
      return elem;
    });
  }, [search]);
  return (
    <>
      <section className={styles.section}>
        <div className={styles.navbar}>
          <Search setSearch={setSearch} search={search}></Search>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            size="large"
            style={{
              backgroundColor: "#E8E8E8",
              color: "black",
              textTransform: "none",
              height: "70%",
            }}
            sx={{ width: "10rem", fontWeight: "bold" }}
            onClick={() => {
              setOpen(true);
            }}
          >
            {" "}
            Add Item
          </Button>
        </div>
        <div className={styles.container}>
          {[1, 2, 3, 4].map((i) => {
            return (
              <div className={styles.container__1} key={i}>
                <h3 className="">Step {i}</h3>
                {search
                  ? searchedValue[i - 1] && searchedValue[i - 1].length
                    ? searchedValue[i - 1].map((title, index) => {
                        return (
                          <Card
                            key={index}
                            id={index}
                            title={title}
                            leftArrow={i - 1 === 0 ? true : false}
                            rightArrow={i - 1 === 3 ? true : false}
                            step={i}
                            handleDelete={handleDelete}
                            shiftRight={shiftRight}
                            search={true}
                          ></Card>
                        );
                      })
                    : ""
                  : step[i - 1] && step[i - 1].length
                  ? step[i - 1].map((title, index) => {
                      return (
                        <Card
                          key={index}
                          id={index}
                          title={title}
                          leftArrow={i - 1 === 0 ? true : false}
                          rightArrow={i - 1 === 3 ? true : false}
                          step={i}
                          shiftLeft={shiftLeft}
                          shiftRight={shiftRight}
                          handleDelete={handleDelete}
                        ></Card>
                      );
                    })
                  : ""}
              </div>
            );
          })}
        </div>
      </section>
      <AddTask open={open} setOpen={setOpen} setStep={setStep}></AddTask>
    </>
  );
}
export default Main;
