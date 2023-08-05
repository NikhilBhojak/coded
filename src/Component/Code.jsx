import { useContext } from "react";
// component
import Editor from "./Editor";
import { DataContext } from "../Context/DataProvider";
import {Box,styled} from '@mui/material'

const Container=styled(Box)`
 display:flex;
 background-color:#060606;
 ${'' /* height: 50vh; */}
`;

const Code=()=>{
    const{html,sethtml,css,setcss,js,setjs}=useContext(DataContext)
    return(
        <Container>
            <Editor
                heading="HTML"
                icon="/"
                color="#FF3C41"
                value={html}
                onChange={sethtml}
            />
            <Editor
                heading="CSS"
                icon="*"
                color="#0EBEFF"
                value={css}
                onChange={setcss}
            />
            <Editor
                heading="JavaScript"
                icon="{}"
                color="#FCD000"
                value={js}
                onChange={setjs}
            />
        </Container>
    )
}


export default Code;