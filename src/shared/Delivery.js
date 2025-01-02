import {GridItem,Text} from '@chakra-ui/react'
import Image from "next/image"

const Delivery = (props) => {
  return (
    <GridItem cursor="pointer"  _hover={{transform:"scale(1.1)"}} transition="all 0.1s" display="flex" flexDirection="column" justifyContent={"center"} alignItems="center">
      <Image
        src={props.image}
        alt={props.text}
        width={100}
        height={100}
      />
      <Text textAlign="center" fontSize={["1.3rem","1.5rem","1.5rem","1.5rem","1.8rem"]}>{props.text}</Text>
    </GridItem>
  )
}

export default Delivery