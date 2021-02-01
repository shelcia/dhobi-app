import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    width: 300,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#398E3D",
    borderRadius: 10,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    alignSelf: "center",
    fontFamily: "CourierPrime_400Regular",
    fontSize: 20,
  },
  title: {
    alignSelf: "center",
    fontFamily: "CourierPrime_700Bold",
    fontSize: 30,
    marginTop: 60,
    marginBottom: 50,
  },
  headTitle: {
    marginRight: "auto",
    paddingLeft: 35,
    fontFamily: "CourierPrime_700Bold",
    fontSize: 30,
    marginTop: 30,
    marginBottom: 30,
  },
  input: {
    marginVertical: 30,
    borderBottomWidth: 1.5,
    borderColor: "#398E3D",
    paddingVertical: 10,
    width: 350,
    fontFamily: "CourierPrime_700Bold",
  },
  search: {
    borderBottomWidth: 1.5,
    borderColor: "#398E3D",
    paddingVertical: 10,
    width: 350,
    fontFamily: "CourierPrime_700Bold",
  },
  label: {
    color: "#398E3D",
    fontFamily: "CourierPrime_700Bold",
    fontSize: 17,
    textAlign: "left",
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  authLink: {
    color: "#398E3D",
    fontStyle: "italic",
    fontFamily: "CourierPrime_400Regular_Italic",
    textDecorationLine: "underline",
  },
  footer: {
    width: 420,
    backgroundColor: "#fff",
    elevation: 8,
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
    elevation: 4,
  },
  footersection: {
    width: 130,
  },
  footerlinks: {
    justifyContent: "center",
    alignItems: "center",
  },
  footertext: {
    fontFamily: "CourierPrime_400Regular",
    marginTop: 5,
  },
  footertextactive: {
    fontFamily: "CourierPrime_400Regular",
    marginTop: 5,
    color: "#398E3D",
  },
  listGroup: {
    width: 350,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: 15,
    borderColor: "#398E3D",
    borderWidth: 1.5,
    borderBottomLeftRadius: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2.62,
    elevation: 4,
  },
  col1: {
    width: 290,
    padding: 20,
    borderBottomLeftRadius: 0,
  },
  col2: {
    width: 60,
    backgroundColor: "#398E3D",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    fontSize: 13,
    display: "flex",
    flexDirection: "row",
  },
  listcol1: {
    fontSize: 12,
    color: "#398E3D",
    width: 120,
    marginVertical: 4,
    fontFamily: "CourierPrime_400Regular",
  },
  listcol2: {
    fontSize: 12,
    width: 140,
    marginVertical: 4,
    fontFamily: "CourierPrime_400Regular",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  table: {
    marginVertical: 20,
    flexDirection: "column",
    borderRadius: 20,
    borderColor: "#398E3D",
    borderWidth: 1.5,
    paddingHorizontal: 20,
    width: 375,
  },
  rowTable: {
    flexDirection: "row",
  },
  entries: {
    width: 180,
    margin: 1,
    alignItems: "flex-start",
    justifyContent: "space-around",
    padding: 3,
    paddingVertical: 15,
    fontFamily: "CourierPrime_700Bold",
  },
  entryText: {
    color: "black",
    fontSize: 15,
    fontFamily: "CourierPrime_700Bold",
    flexShrink: 1,
    flexWrap: "wrap",
  },
  labelText: {
    color: "#398E3D",
    fontSize: 15,
    fontFamily: "CourierPrime_700Bold",
  },
  warning: {
    color: "red",
    fontSize: 14,
    fontFamily: "CourierPrime_400Regular",
  },
  success: {
    color: "#398E3D",
    fontSize: 14,
    fontFamily: "CourierPrime_400Regular",
  },
});
