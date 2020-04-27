const buttons = {
  primary: {
    borderColor: "primary",
    borderStyle: "solid",
    borderWidth: 3,
    backgroundColor: "primary",
    borderRadius: 9001,
    boxShadow: "default",
    color: "background",
    cursor: "pointer",
    fontFamily: "body",
    fontSize: 3,
    fontWeight: "semi",
    transition: "background-color .4s, color .2s",
    width: "100%",
    "&:hover": {
      backgroundColor: "background",
      color: "primary",
    },
  },
  // TODO: move
  questionCount: {
    cursor: "pointer",
    backgroundColor: "background",
    position: "relative",
    zIndex: 1,
  },
  transparent: {
    backgroundColor: "transparent",
    cursor: "pointer",
    m: 0,
    p: 0,
  },
};

export const variants = {
  buttons,
  // TODO: (re)move
  wrapper: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    maxHeight: "100vh",
  },
};
