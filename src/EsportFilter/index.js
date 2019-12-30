import React, { useState } from "react";
import "./style.scss";
import { Button } from "reactstrap";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import cash from "../images/cash.svg"
import star from "../images/star.svg"
import games from "../images/games.svg"

const EsportsFilter = (props) => {
    const [select, setSelection] = useState({ selection: "Välj spel", selection2: "none" })
    const [dropdownOpen, setDropDown] = useState(false)

    const setbutton = (event) => {
        setSelection({
            selection: event.target.value,
        });
    };


    const toggle = () => {
        setDropDown(!dropdownOpen
        );
    }

    const { selection } = select;
    return (
        <div className="oui">
            {" "}
            <div>
                <h4 className="filter-title">Vilket spel vill du betta på ?</h4>{" "}
            </div>{" "}
            <div className="filter-box">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>

                    <DropdownToggle className="dropdown-button" caret>
                        <img src={games} className="svg-icon" alt="games-icon" /> {selection}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem
                            value="CS:GO"
                            onClick={event => {
                                props.csgo("csgo");
                                setbutton(event);
                            }}
                        >
                            CSGO
              </DropdownItem>
                        <DropdownItem
                            value="League of Legends"
                            onClick={event => {
                                props.lol("leagueoflegends"); setbutton(event);
                            }}
                        >
                            League of Legends
              </DropdownItem>
                        <DropdownItem
                            value="Dota 2"
                            onClick={event => {
                                props.dota("dota2"); setbutton(event);
                            }}
                        >
                            Dota 2
              </DropdownItem>
                        <DropdownItem
                            value="Starcraft 2"
                            onClick={event => {
                                props.starcraft("starcraft2"); setbutton(event);
                            }}
                        >
                            Starcraft 2
              </DropdownItem>
                        <DropdownItem
                            value="Overwatch"
                            onClick={event => {
                                props.overwatch("overwatch"); setbutton(event);
                            }}
                        >
                            Overwatch
              </DropdownItem>
                        <DropdownItem
                            value="Andra spel"
                            onClick={event => {
                                props.overwatch("other"); setbutton(event);
                            }}
                        >
                            Andra spel
              </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div>
                <h4 className="filter-title">Filtrera efter {selection} </h4>
            </div>
            <div className="filter-box">
                <Button
                    value="ewager"
                    onClick={event => {
                        props.ewager(); setSelection({ ...select, selection2: event.target.value });
                    }}
                    className={select.selection2 === "ewager" ? "active1" : "filter-buttons "}
                >
                    <img src={star} className="svg-icon-star" alt="star-icon" />
                    Lägst omsättningskrav
          </Button>
                <Button
                    value="edeposit"
                    onClick={event => {
                        props.edeposit(); setSelection({ ...select, selection2: event.target.value });
                    }}
                    className={
                        select.selection2 === "edeposit" ? "active1" : "filter-buttons "
                    }
                >
                    <img src={cash} className="svg-icon" alt="cash-icon" />
                    Högst Insättningsbonus
          </Button>
            </div>
            <div className="clear-filter">
                <Button
                    onClick={() => {
                        props.reset();
                        setSelection({ selection: "Välj spel", selection2: "none" });
                    }}
                    className="filter-buttons-clear "
                >
                    Rensa filtrering
          </Button>{" "}
            </div>
        </div>
    );

    //       value="csgo"
    //       onClick={event => {
    //         this.props.csgo("csgo");
    //         this.setbutton(event);
    //       }}
    //       className={selection === "csgo" ? "active2" : "filter-buttons "}
    //     >
    //       CS:GO
    //     </Button>
    //     <Button
    //       value="leagueoflegends"
    //       onClick={event => {
    //         this.props.lol("leagueoflegends") && this.setbutton(event);
    //       }}
    //       className={
    //         selection === "leagueoflegends" ? "active2" : "filter-buttons "
    //       }
    //     >
    //       Leauge of Legends
    //     </Button>
    //     <Button
    //       value="dota2"
    //       onClick={event => {
    //         this.props.dota("dota2") && this.setbutton(event);
    //       }}
    //       className={selection === "dota2" ? "active2" : "filter-buttons "}
    //     >
    //       Dota2
    //     </Button>
    //     <Button
    //       value="starcraft2"
    //       onClick={event => {
    //         this.props.starcraft("starcraft2") && this.setbutton(event);
    //       }}
    //       className={
    //         selection === "starcraft2" ? "active2" : "filter-buttons "
    //       }
    //     >
    //       Starcraft2
    //     </Button>
    //     <Button
    //       value="overwatch"
    //       onClick={event => {
    //         this.props.overwatch("overwatch") && this.setbutton(event);
    //       }}
    //       className={
    //         selection === "overwatch" ? "active2" : "filter-buttons "
    //       }
    //     >
    //       Overwatch
    //     </Button>{" "}
    //     <Button
    //       value="other"
    //       onClick={event => {
    //         this.props.other("other") && this.setbutton(event);
    //       }}
    //       className={selection === "other" ? "active2" : "filter-buttons "}
    //     >
    //       Andra spel
    //     </Button>
    //   </div>

    //   <div>
    //     <h4 className="filter-title">Filtrera efter</h4>
    //   </div>
    //   <div className="filter-box">
    //     <Button
    //       value="ewager"
    //       onClick={event => {
    //         this.props.ewager() && this.setbutton2(event);
    //       }}
    //       className={selection2 === "ewager" ? "active2" : "filter-buttons "}
    //     >
    //       Lägst omsättningskrav
    //     </Button>
    //     <Button
    //       value="edeposit"
    //       onClick={event => {
    //         this.props.edeposit() && this.setbutton2(event);
    //       }}
    //       className={
    //         selection2 === "edeposit" ? "active2" : "filter-buttons "
    //       }
    //     >
    //       Högst Insättningsbonus
    //     </Button>
    //     <Button
    //       value="efree"
    //       onClick={event => {
    //         this.props.efree() && this.setbutton2(event);
    //       }}
    //       className={selection2 === "efree" ? "active2" : "filter-buttons "}
    //     >
    //       Utan omsättningskrav
    //     </Button>{" "}
    //   </div>
    //   <div className="clear-filter">
    //     <Button
    //       onClick={() => {
    //         this.props.reset() &&
    //           this.setState({ selection: "none", selection2: "none" });
    //       }}
    //       className="filter-buttons-clear "
    //     >
    //       Rensa filtrering
    //     </Button>{" "}
    //   </div>
    // </div>
}


export default EsportsFilter;
