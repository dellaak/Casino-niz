import React from "react";
import { Button } from "reactstrap";

const FakturaFilter = (props) => {


    return (
        <div className="oui">
            <div>
                <h2 className="filter-title">
                    Filtrera casino faktura med knapparna nedanför
          </h2>
            </div>
            <div className="filter-box">
                <Button
                    type="button"

                    onClick={() => {
                        props.zimpler();
                    }}
                    className={
                        props.activezimp ? "active1" : "filter-buttons"
                    }
                >Zimpler</Button>
                <Button
                    type="button"
                    onClick={props.siru}
                    className={
                        props.activesiru ? "active1" : "filter-buttons"
                    }
                >Siru-Mobile</Button>

                <Button
                    type="button"
                    onClick={props.smsvoucher}
                    className={
                        props.activesms ? "active1" : "filter-buttons"
                    }
                >SMS-Voucher</Button>

                {/* <Button
type="button"
            onClick={this.props.klarna}
            className={
              this.props.activeklarna ? "activeklarna" : "filter-button-klarna"
            }
          /> */}


            </div>
            <div className="clear-filter">
                <Button
                    type="button"
                    onClick={props.reset}
                    className="filter-buttons-clear "
                >
                    Rensa filtrering
          </Button>{" "}
            </div>
        </div>
    );
}


export default FakturaFilter;
