import { ActivityIndicator } from "react-native";
import { Container } from "../layout/layout";

export const Loading = () => {
  return (
    <Container>
        <ActivityIndicator
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            size="large"
            color="#FF5523"
        />
    </Container>
    )
};