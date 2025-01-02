import { ListItem, Text } from "@chakra-ui/react";
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
const List = (props) => {
  return (
    <Fade>
    <Slide left>
    <ListItem my={4} fontSize="22px">
      <Text>{props.text}</Text>
    </ListItem>
    </Slide>
    </Fade>

  );
};

export default List;
