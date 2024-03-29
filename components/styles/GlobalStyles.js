import { Dimensions, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  warning: {
    color: "red",
    fontSize: 14,
    fontFamily: "JosefinSans_400Regular",
  },
  success: {
    color: "green",
    fontSize: 14,
    fontFamily: "JosefinSans_400Regular",
  },
  button: {
    width: 300,
    // paddingHorizontal: 60,
    paddingVertical: 20,
    backgroundColor: "#3B90DA",
    borderRadius: 50,
    marginBottom: 30,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    alignSelf: "center",
    fontFamily: "JosefinSans_500Medium",
    fontSize: 20,
  },
  title: {
    alignSelf: "flex-start",
    paddingLeft: 30,
    fontFamily: "JosefinSans_700Bold",
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    color: "#3B90DA",
  },
  headTitle: {
    marginRight: "auto",
    paddingLeft: 35,
    fontFamily: "JosefinSans_500Medium",
    fontSize: 30,
    marginTop: 30,
    marginBottom: 30,
  },
  buttonContainer: {
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    width: Dimensions.get("window").width,
    backgroundColor: "#fff",
    elevation: 4,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 50,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2.62,
  },
  footersection: {
    width: 100,
    marginBottom: 10,
  },
  footerlinks: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: Dimensions.get("window").width - 40,
    paddingHorizontal: 30,
    paddingVertical: 25,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameCol: {
    width: 165,
    // borderColor: "blue",
    // borderWidth: 2,
  },
  countCol: {
    width: 85,
    flexDirection: "row",
    // borderColor: "green",
    // borderWidth: 2,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "#333333",
    fontSize: 15,
    fontFamily: "JosefinSans_500Medium",
    flexShrink: 1,
    flexWrap: "wrap",
  },
  listText: {
    color: "#A5A5A5",
    fontSize: 12,
    fontFamily: "JosefinSans_400Regular",
    flexShrink: 1,
    flexWrap: "wrap",
    marginTop: 8,
  },
  iconStyle: {
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  tinyCards: {
    elevation: 4,
    backgroundColor: "#fff",
    shadowColor: "#000",
    width: 100,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    flex: 1,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    color: "#3B90DA",
    fontFamily: "JosefinSans_500Medium",
    fontSize: 17,
    textAlign: "left",
  },
  input: {
    marginVertical: 30,
    borderBottomWidth: 1.5,
    borderColor: "#3B90DA",
    paddingVertical: 10,
    width: 350,
    fontFamily: "JosefinSans_500Medium",
  },
  authLink: {
    color: "#3B90DA",
    fontStyle: "italic",
    fontFamily: "JosefinSans_600SemiBold_Italic",
    textDecorationLine: "underline",
  },
  labelText: {
    color: "#3B90DA",
    fontSize: 15,
    fontFamily: "JosefinSans_500Medium",
  },
  table: {
    marginVertical: 20,
    flexDirection: "column",
    borderRadius: 20,
    borderColor: "#3B90DA",
    borderWidth: 2.5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: 375,
  },
  rowTable: {
    flexDirection: "row",
    marginVertical: 10,
  },
  entries: {
    width: 150,
    margin: 1,
    color: "#3B90DA",
    alignItems: "flex-start",
    justifyContent: "space-around",
    padding: 3,
    fontFamily: "JosefinSans_700Bold",
  },
  entryText: {
    // width: 170,
    color: "#333333",
    fontSize: 15,
    fontFamily: "JosefinSans_500Medium",
    flexShrink: 1,
    flexWrap: "wrap",
  },
  boldText: {
    color: "#3B90DA",
    fontFamily: "JosefinSans_700Bold",
    marginTop: 40,
    fontSize: 24,
    textTransform: "uppercase",
  },
  listGroup: {
    width: 350,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 10,
    // borderColor: "#3B90DA",
    // borderWidth: 2.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  col1: {
    width: 290,
    padding: 20,
    borderBottomLeftRadius: 0,
  },
  col2: {
    width: 60,
    backgroundColor: "#3B90DA",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  // footertext: {
  //   fontFamily: "JosefinSans_400Regular",
  //   marginTop: 5,
  // },
  // footertextactive: {
  //   fontFamily: "JosefinSans_500Medium",
  //   marginTop: 5,
  //   color: "#398E3D",
  // },
  // input: {
  //   marginVertical: 30,
  //   borderBottomWidth: 1.5,
  //   borderColor: "#398E3D",
  //   paddingVertical: 10,
  //   width: 350,
  //   fontFamily: "JosefinSans_500Medium",
  // },
  // search: {
  //   borderBottomWidth: 1.5,
  //   borderColor: "#398E3D",
  //   paddingVertical: 10,
  //   width: 350,
  //   fontFamily: "JosefinSans_500Medium",
  // },
  // label: {
  //   color: "#398E3D",
  //   fontFamily: "JosefinSans_500Medium",
  //   fontSize: 17,
  //   textAlign: "left",
  // },

  // authLink: {
  //   color: "#398E3D",
  //   fontStyle: "italic",
  //   fontFamily: "FiraSans_500Medium_Italic",
  //   textDecorationLine: "underline",
  // },

  // col1: {
  //   width: 290,
  //   padding: 20,
  //   borderBottomLeftRadius: 0,
  // },
  // col2: {
  //   width: 60,
  //   backgroundColor: "#398E3D",
  //   borderTopRightRadius: 20,
  //   borderBottomRightRadius: 20,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // list: {
  //   fontSize: 13,
  //   display: "flex",
  //   flexDirection: "row",
  // },
  // listcol1: {
  //   fontSize: 12,
  //   color: "#398E3D",
  //   width: 120,
  //   marginVertical: 4,
  //   fontFamily: "JosefinSans_500Medium",
  // },
  // listcol2: {
  //   fontSize: 12,
  //   width: 140,
  //   marginVertical: 4,
  //   fontFamily: "JosefinSans_400Regular",
  // },

  // labelText: {
  //   color: "#398E3D",
  //   fontSize: 15,
  //   fontFamily: "JosefinSans_500Medium",
  // },
});
