import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Sloticon from "../images/slots.png";
import freespinsicon from "../images/freespinsicon.png";
import Cashicon from "../images/cash.png";
import Presenticon from "../images/bonus.png";
import Mobilicon from "../images/mobil.png";
import Depositicon from "../images/deposit.png";
import Chaticon from "../images/chaticon.png";
import Uttagicon from "../images/uttag.png";
import Mobilonlyicon from "../images/mobilt.png";
import Wagericon from "../images/wager.png";
import Bonusbagicon from "../images/bag.png";
import Sportsicon from "../images/sportsicon.png";
import Freewagericon from "../images/freewager.png";
import { Container, Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';
import "./style.scss";
import styled from "styled-components";
import { RadialProgress } from 'react-radial-progress-indicator';
;

const StyledSpan = styled.span`
    display: inline-block;
    height: 24px;
    line-height: 24px;
    position: relative;
    width: 24px;
    position:absolute;
    right:0;
    transition: all 0.3s ease-out;
    transform: ${props => (props.rotate ? `rotate(180deg)` : "")};
    svg{
    display: block;
    height: 100%;
    width: 100%;
    }
  `



const Recension = (props) => {
	let casinotitle = props.match.params.casinotitle

	const [overall, setOverall] = useState({
		selectedCasino: false, recension: false, q1: false,
		q2: false,
		q3: false,
		casinoterms: [],
		sportsterms: [],
		bonusterms: []
	})
	const [percentage, setPercentage] = useState({ game: 1, support: 1, exp: 1 })
	let { selectedCasino, recension } = overall;


	useEffect(() => {

		let selec;
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
		const GetCasino = () => {
			let list = props.list.Casinon
			let title;
			for (let i of list) {
				title = i.title.toUpperCase();
				casinotitle = casinotitle.toUpperCase()
				if (title === casinotitle) {
					if (i.hasOwnProperty("recension")) {
						try {
							selec = i
							return setOverall({
								...overall,
								selectedCasino: i,
								recension: i.recension[0],
								casinoterms: i.recension[0].casinoterms,
								sportsterms: i.recension[0].sportsterms,
								bonusterms: i.recension[0].bonusterms
							});
						}
						catch (e) {

						}
					} else {

						return window.location.replace("/404")

					}
				}

			}
			return () => {
				setPercentage({ game: 1, support: 1, exp: 1 })
			};

		}
		const setStats = () => {
			if (!selec) {
				return
			}
			let g = selec.recension[0]
			return setPercentage({ game: g.gamebar, support: g.support, exp: g.experience })
		}

		GetCasino()
		setStats()

	}, [])







	let StyledLogo = styled.div`
		background: url(${selectedCasino.caslogo});
		background-size: 100% 100%;
		background-repeat: no-repeat;
		border-radius: 10%;
		width: 300px;
		height: 150px;
		margin:0 auto;
	`;

	let StyledNoLogo = styled.div`
		background: url(${selectedCasino.caslogo});
		background-size: 100% 100%;
		background-repeat: no-repeat;
		border-radius: 50%;
		width: 000px;
		height: 200px;
	`;


	let StyledTopWrap = styled.div`
		padding: 20px;
		display: flex;
		flex:1;
		background-color: ${selectedCasino.color};
		/* background-image: linear-gradient(to left, #214467 40%, ${selectedCasino.color}); */
		background-size: cover;
		color: #fed100;
		justify-content: space-around;
		flex-wrap: wrap;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	`;

	const StyledCircleP = styled.p`
  color: ${selectedCasino.textcolor} !important;
  text-align: center;
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-style: bold;
	padding-top: 0.1em;
	font-weight:700;
	text-shadow: 0.07em 0.07em 0 rgba(0, 0, 0, 0.1);
  `







	return (

		< div >
			<Helmet>
				<title>
					{casinotitle.length > 3 ? `${casinotitle} RECENSION ⇛` : ''}
					{selectedCasino ? `${selectedCasino.slogan}` : "Snabbfakta"} |
					Casinoniz
          </title>

				<meta name="description" content={recension.summering} />
				<meta
					name="keywords"
					content="Casino,faktura casino, casino faktura,recension, review , recension, fakturacasino, casino med faktura,omsättningsfria, omsättningsfritt, svensk casino , svenska casinon. Casinobonusar, 2019,2020, bonus, spela, insättningsbonus,esport,csgo.dota2.starcraft, leauge of legends, lol, free spins, esports,betting"
				/>

				{selectedCasino.faq ? (<script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
         "@type": "FAQPage",
         "mainEntity": [
          ${selectedCasino.q1 ? JSON.stringify(selectedCasino.q1) : 'null'}
          
        , 
          ${selectedCasino.q2 ? JSON.stringify(selectedCasino.q2) : 'null'}
          
        , 
          ${selectedCasino.q3 ? JSON.stringify(selectedCasino.q3) : 'null'}
         
       ]
      }
      }`}</script>) : ''}

			</Helmet>
			<div className="spela-lagom">
				<span>
					18+ &#8226; Spela Ansvarfullt &#8226;{" "}
					<a href="https://www.stodlinjen.se">www.stodlinjen.se</a>{" "}
				</span>
			</div>

			{recension ? (
				<div className="recension-wrapper">
					<div className="overlay-wrap">
						<StyledTopWrap>
							<Link
								target="_blank"
								rel="noopener noreferrer nofollow "
								to={{ pathname: `/Redirect/${selectedCasino.title}`, match: `${selectedCasino.title}` }}>

								<StyledLogo />
							</Link>
							<div className="recension-bars">
								<div className="circle-div">

									<RadialProgress
										backgroundColour={selectedCasino.color}
										backgroundTransparent={false}
										duration={1000}
										fontRatio={4}
										height={100}
										ringBgColour="grey"
										ringFgColour={selectedCasino.textcolor}
										ringIntermediateColour="#aaa"
										ringThickness={0.2}
										segmented={false}
										showIntermediateProgress
										startStep={0}
										step={percentage.game}
										steps={100}
										text={function text(steps, percentage) { return (Math.floor(steps * percentage * 10) / 10).toFixed(0) }}
										width={100}
									/>
									<StyledCircleP>Spelutbud</StyledCircleP>
								</div>

								<div className="circle-div">

									<RadialProgress
										backgroundColour={selectedCasino.color}
										backgroundTransparent={false}
										duration={1000}
										fontRatio={4}
										height={100}
										ringBgColour="grey"
										ringFgColour={selectedCasino.textcolor}
										ringIntermediateColour="#aaa"
										ringThickness={0.2}
										segmented={false}
										showIntermediateProgress
										startStep={0}
										step={percentage.support}
										steps={100}
										text={function text(steps, percentage) { return (Math.floor(steps * percentage * 10) / 10).toFixed(0) }}
										width={100}
									/>
									<StyledCircleP>Support</StyledCircleP>
								</div>
								<div className="circle-div">

									<RadialProgress
										backgroundColour={selectedCasino.color}
										backgroundTransparent={false}
										duration={1000}
										fontRatio={4}
										height={100}
										ringBgColour="grey"
										ringFgColour={selectedCasino.textcolor}
										ringIntermediateColour="#000"
										ringThickness={0.2}
										segmented={false}
										showIntermediateProgress
										startStep={0}
										step={percentage.exp}
										steps={100}
										text={function text(steps, percentage) { return (Math.floor(steps * percentage * 10) / 10).toFixed(0) }}
										width={100}
									/>
									<StyledCircleP>Layout</StyledCircleP>
								</div>


							</div>
						</StyledTopWrap>




						<Container>
							<h2 className="rece-title"> Casino Recension {selectedCasino.title}</h2>
							<i className="fas fa-star"></i>
							<div className="recension-deposit">
								<div className="recension-small-box">
									<h2 className="top-icon-text">Aktuell casino bonus</h2>
									<img
										className="recension-slot-icon"
										alt="welcome-icon"
										src={Presenticon}
									/>
									<p>  {selectedCasino.depositbonus}</p>
									{selectedCasino.casinospecialterms ? <small> 18+ | <a href={selectedCasino.rules}>Regler&Villkor gäller</a> | <a href="https://www.stodlinjen.se/"> www.stodlinjen.se</a> | {selectedCasino.special}</small> : (<small>       18+ | {" "}
										<a href={selectedCasino.rules}>Regler&Villkor gäller</a> |
									<a href="https://www.stodlinjen.se/"> www.stodlinjen.se</a>{" "}</small>)}

								</div>


								{selectedCasino.sportsbonus && selectedCasino.sports && selectedCasino.activebonus ? <div className="recension-small-box">
									<h2 className="top-icon-text">Aktuell Sportbonus</h2>
									<img
										className="recension-slot-icon"
										alt="slot-icon"
										src={Sportsicon}
									/>
									<p>{selectedCasino.sportsbonus}</p>
								</div> : <div className="recension-small-box">
										<h2 className="top-icon-text">Slots</h2>
										<img
											className="recension-slot-icon"
											alt="slot-icon"
											src={Sloticon}
										/>
										<p>{recension.topslotgames}</p>
									</div>}
								<div className="recension-small-box">
									<h2 className="top-icon-text">Insättningsmetoder</h2>
									<img
										className="recension-slot-icon"
										alt="cash-icon"
										src={Cashicon}
									/>
									<p>{recension.deposittypes}</p>
								</div>
							</div>


							<div className="fakta-box">
								<h4 className="snabb-title">
									Snabbfakta om {selectedCasino.title} och aktuell casino bonus
							</h4>
								<div className="Snabbfakta">
									<p>
										<img
											className="snabb-icon"
											alt="Wager-icon"
											src={Wagericon}
										/>
										Omsättningskrav: {selectedCasino.wager}X
                  </p>

									<p>
										<img
											className="snabb-icon"
											alt="spinner-icon"
											src={freespinsicon}
										/>
										Freespins:{selectedCasino.freespins > 1 ? `${selectedCasino.freespins}` : "❌"}
									</p>

									<p>
										<img
											className="snabb-icon"
											alt="Wager-icon"
											src={Bonusbagicon}
										/>
										Bonusprocent: {selectedCasino.depositpercent}%
                  </p>

									<p>
										<img
											className="snabb-icon"
											alt="mobil-icon"
											src={Freewagericon}
										/>
										Omsättningsfria spins:{" "}
										{selectedCasino.freefromwager ? "✅" : "❌"}
									</p>
								</div>

								<div className="Snabbfakta">
									<p>
										<img
											className="snabb-icon"
											alt="deposit-icon"
											src={Depositicon}
										/>
										Minsta insättning: {recension.mindeposit} SEK
                  </p>
									<p>
										<img
											className="snabb-icon"
											alt="uttag-icon"
											src={Uttagicon}
										/>
										Minsta uttag: {recension.minout} SEK
                  </p>
									<p>
										<img
											className="snabb-icon"
											alt="mobil-icon"
											src={Mobilonlyicon}
										/>
										Bankid: {selectedCasino.bankid ? "✅" : "❌"}
									</p>
									<p>
										<img
											className="snabb-icon"
											alt="chat-icon"
											src={Chaticon}
										/>
										Livechat: {recension.livechat ? "✅" : "❌"}{" "}
									</p>
									<p>
										<img
											className="snabb-icon"
											alt="mobil-icon"
											src={Mobilicon}
										/>
										Swish: {recension.swish ? "✅" : "❌"}
									</p>
								</div>
							</div>



							<div className="recension-body">
								<h3>Recension {selectedCasino.title} </h3>
								<p>{recension.toprecension}</p>

								<h3 className="recension-bottom-title">
									{recension.egentitel ? recension.egentitel : "Casinot"}
								</h3>
								<div className="recension-box-icon-right">
									<p>{recension.secondrec}</p>
									<img
										className="recension-bigicon"
										alt="slot-icon"
										src={Sloticon}
									/>
								</div>
								<h3 className="recension-bottom-title"> {recension.egentitel2 ? recension.egentitel2 : "Sport och Odds"}</h3>
								<div className="recension-box-icon-left">
									<img
										className="recension-bigicon"
										alt="slot-icon"
										src={Sportsicon}
									/>
									<p>{recension.sportsrec}</p>
								</div>

								<div className="regular-margin-box">
									<h3 className="recension-bottom-title">Summering</h3>
									<p>{recension.summering}</p>
								</div>

								<div className="terms-box">

									<div className="regular-box">
										<h5>Bonusvillkor</h5>
										<ul className="bonus-terms-box">
											{overall.bonusterms.map(bonus => (
												<li key={selectedCasino.id++}>{bonus}</li>
											))}
										</ul>
									</div>
									<div className="regular-box">
										<h5>Villkor för spel på slots</h5>
										<ul className="bonus-terms-box">
											{overall.casinoterms.map(bonus => (
												<li key={selectedCasino.id++}>{bonus}</li>
											))}
										</ul>
									</div>
									<div className="regular-box">
										<h5>Villkor för spel på odds</h5>
										<ul className="bonus-terms-box">
											{overall.sportsterms.map(bonus => (
												<li key={selectedCasino.id++}>{bonus}</li>
											))}
										</ul>
									</div>
									{selectedCasino.activebonus ? <div className="villkor-obs">

										<small>
											Läs igenom fullständiga villkor för aktuell bonus  hos {selectedCasino.title}! Då vi
											endast skriver ut några enstaka villkor.
		</small>
										<p className="bottom-rules-recension">
											18+ | {" "}
											<a href={selectedCasino.rules}>Regler&Villkor gäller</a> |
		<a href="https://www.stodlinjen.se/"> www.stodlinjen.se</a>{" "}
										</p>
									</div> : null}
								</div>

								<div className="buttonbox-recension">
									<Link className="button-recension"
										target={props.isBlocked ? '' : "_blank"}
										rel="noopener noreferrer nofollow "
										to={{ pathname: `/Redirect/${selectedCasino.title}`, match: `${selectedCasino.title}` }}>

										Hämta bonus hos {selectedCasino.title}

									</Link>
								</div>

								<p className="bottom-rules-recension">
									18+ | {" "}
									<a href={selectedCasino.rules}>Regler&Villkor gäller</a> |
                    <a href="https://www.stodlinjen.se/"> www.stodlinjen.se</a>{" "}
								</p>
							</div>


							{selectedCasino.faq ? (<div className="question-wrap">
								<div className="head-q">
									<h2>Frågor och svar om {selectedCasino.title}</h2>
									<p>Här har vi har samlat några av svaren på de vanligaste frågorna gällande {selectedCasino.title}. Har du fler frågar kan du alltid kontakta själva casinot eller fråga oss!</p>
								</div>
								<Row className="q-box" >
									<Col xs="12" m="12" lg="12" sm="12" >

										<Col className="single-q" >
											<div   >
												<Button onClick={() => { setOverall({ ...overall, q1: !overall.q1 }) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" ></span> <span >{selectedCasino.q1.name}</span> <StyledSpan rotate={overall.q1 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>

												<Collapse isOpen={overall.q1}>
													<Card>
														<CardBody ><div className="msg" xs="6"><div ><p>{selectedCasino.q1.acceptedAnswer.text}</p></div>
														</div></CardBody>
													</Card>
												</Collapse>
											</div>
										</Col>

										<Col className="single-q">
											<div   >
												<Button onClick={() => { setOverall({ ...overall, q2: !overall.q2 }) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" > </span>
													<span >{selectedCasino.q2.name}</span><StyledSpan rotate={overall.q2 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


												<Collapse isOpen={overall.q2}>
													<Card>
														<CardBody ><div className="msg" xs="6"  ><div ><p>{selectedCasino.q2.acceptedAnswer.text}</p></div>
														</div></CardBody>
													</Card>
												</Collapse>
											</div>
										</Col>

										<Col className="single-q">
											<div  >
												<Button onClick={() => { setOverall({ ...overall, q3: !overall.q3 }) }} xs="6" className="question-head col-sm" style={{ marginBottom: '1rem', textAlign: "left" }}><span className="q1logo" role="img" aria-hidden="true" ></span>
													<span >{selectedCasino.q3.name}</span> <StyledSpan rotate={overall.q3 ? 1 : undefined}><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></StyledSpan></Button>


												<Collapse isOpen={overall.q3}>
													<Card>
														<CardBody ><div className="msg" xs="6"  ><div ><p>{selectedCasino.q3.acceptedAnswer.text} </p></div>
														</div></CardBody>
													</Card>
												</Collapse>
											</div>
										</Col>

									</Col>
								</Row>
							</div>) : ''}
						</Container>
					</div>
					<p className="publish-date"><b>Senast uppdaterad: </b><i> {selectedCasino ? `${selectedCasino.publishdate}` : '...'}</i></p>
				</div>

			) : (
					<div className="recension-wrapper">
						<div className="overlay-wrap">
							<div className="recension-nocasino-wrap">
								<StyledNoLogo />
								<h2>Casinot finns inte eller så kommer recensionen inom kort!</h2>
							</div>
						</div>
					</div>
				)
			}
		</div >
	);

}

export default Recension;
