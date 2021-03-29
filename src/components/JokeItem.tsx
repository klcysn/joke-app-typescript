import {CardWrapper, CardBottom, CardTop, Setup, Delivery} from "./styled"
import {Joke} from "../common/types"

interface JokeItemProps {
    joke: Joke
}

const JokeItem: React.FC<JokeItemProps> = ({joke}) =>{
    const flags = Object.values(joke.flags).filter((value)=>value).join(" , ")
    return(
        <CardWrapper>
            <CardTop>
                {joke.type === "single" ? (
                    <p>{joke.joke}</p>
                ): (
                    <>
                        <Setup>{joke.setup}</Setup> 
                        <Delivery>{joke.delivery}</Delivery>
                    </> 
                )}
            </CardTop>
            <CardBottom>
                <p>{joke.category}</p>
                <div>{flags}</div>
            </CardBottom>
        </CardWrapper>
    )
}

export default JokeItem;