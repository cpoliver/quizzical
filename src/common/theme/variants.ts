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
  content: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    p: 3,
  },
  footer: {
    alignSelf: "center",
    width: "90%",
    p: 6,
  },
  header: {
    alignSelf: "stretch",
    px: 4,
    py: 5,
  },
  wrapper: {
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    maxHeight: "100vh",
  },
};
