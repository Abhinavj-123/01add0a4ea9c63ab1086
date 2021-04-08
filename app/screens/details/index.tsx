import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Container, Content, Text, Label } from "native-base";

const Detail = (props: any) => {
  const route = useRoute();
  const [data, setdata] = useState("");

  React.useEffect(() => {
    const { data } = route.params;
    setdata(data);
  }, []);

  return (
    <Container>
      <Content style={{ width: "85%", alignSelf: "center" }}>
        <Label style={styles.labelStyle}>NAME :</Label>
        <Text>{data.name}</Text>

        <Label style={styles.labelStyle}>NASA JPL URL :</Label>
        <Text>{data.nasa_jpl_url}</Text>

        <Label style={styles.labelStyle}>POTENTIAL HAZARDOUS : </Label>
        <Text>{data.is_potentially_hazardous_asteroid}</Text>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontWeight: "500",
    marginTop: 15,
  },
});

export default Detail;
