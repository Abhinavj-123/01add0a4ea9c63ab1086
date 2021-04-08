import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Content,
  Form,
  Label,
  Button,
  Text,
  Input,
  Item,
} from "native-base";
import { ApiConfig } from "../../api";

const WelcomeScreen = (props: any) => {
  const navigation = useNavigation();
  const [id, setId] = useState("");
  const [hideProgress, setHideProgress] = useState(false);

  React.useEffect(() => {}, []);

  const apiCall = (id_) => {
    setHideProgress(true);
    new ApiConfig()
      .getJSON(
        "https://api.nasa.gov/neo/rest/v1/neo/" +
          id_ +
          "?api_key=oPg5OeEgU9uJAYHOvu4JPztTACf2ti31Ry3qmexm"
      )
      .then((response) => {
        setHideProgress(false);
        navigation.navigate("Detail", { data: response.data });
      })
      .catch((ERROR) => {
        setHideProgress(false);
        alert("Asteroid not found");
      });
  };

  const randomAsteroid = () => {
    setHideProgress(true);
    new ApiConfig()
      .getJSON("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
      .then((response) => {
        let randomId =
          response.data.near_earth_objects[
            Math.floor(Math.random() * response.data.near_earth_objects.length)
          ].id;
        apiCall(randomId);
        setHideProgress(false);
      })
      .catch((ERROR) => {
        setHideProgress(false);
        alert("Server Error");
        console.log(ERROR);
      });
  };

  return (
    <Container>
      <Content style={{ width: "85%", alignSelf: "center" }}>
        <Form style={{ marginTop: 10 }}>
          <Item floatingLabel>
            <Label>Enter Asteroid ID</Label>
            <Input
              value={id}
              placeholder="Enter Asteroid ID"
              onChangeText={(input) => {
                setId(input);
              }}
            />
          </Item>
        </Form>

        <Button
          style={{
            marginVertical: 40,
            width: "40%",
            justifyContent: "center",
            alignSelf: "center",
          }}
          disabled={id.length > 0 ? false : true}
          onPress={() => apiCall(id)}
        >
          <Text style={{ color: "#FFF" }}>Search</Text>
        </Button>

        <Button
          style={{
            marginVertical: 20,
            width: "40%",
            justifyContent: "center",
            alignSelf: "center",
          }}
          onPress={() => randomAsteroid()}
        >
          <Text style={{ color: "#FFF" }}>Random Asteroid</Text>
        </Button>
        {hideProgress ? <ActivityIndicator size="large" color="grey" /> : null}
      </Content>
    </Container>
  );
};

export default WelcomeScreen;
