import React from "react"
import { Input } from 'reactstrap';
import "./style.scss"

const SearchComp = (props) => {





    return (<React.Fragment>
        <Input type="text"
            placeholder="Sök efter casino"
            onChange={props.handleChange}
            value={props.value} />

    </React.Fragment>)
}


export default SearchComp